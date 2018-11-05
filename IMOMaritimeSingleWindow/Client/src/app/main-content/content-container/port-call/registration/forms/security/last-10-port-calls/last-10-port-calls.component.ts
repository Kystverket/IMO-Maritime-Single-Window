import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { SecurityPreviousPortOfCallModel, SecurityLevelModel } from 'app/shared/models/';
import { Subscription } from 'rxjs/Subscription';
import { FalSecurityService } from 'app/shared/services/fal-security.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-last-10-port-calls',
  templateUrl: './last-10-port-calls.component.html',
  styleUrls: ['./last-10-port-calls.component.css']
})
export class Last10PortCallsComponent implements OnInit, OnDestroy {

  @Input() portCallList: SecurityPreviousPortOfCallModel[]; // List containing the port calls registered in the security form
  portCallListDeepCopy: SecurityPreviousPortOfCallModel[] = []; // Deep copy of portCallList, used as input in last-10-port-calls-table component
  locationFound = false;  // boolean used for switching between search-location component and info table for selected location
  locationData = new LocationProperties().getPropertyList();
  formModel: SecurityPreviousPortOfCallModel = new SecurityPreviousPortOfCallModel(); // model that is built using the form before it is added to the table
  securityLevelList: SecurityLevelModel[];
  getSecurityLevelListSubscription: Subscription;

  /* DateTime is a custom interface used in the date-picker and date-time-picker components */
  arrivalModel: DateTime = {
    date: null,
    time: new NgbTime(0, 0, 0)
  };
  departureModel: DateTime = {
    date: null,
    time: new NgbTime(0, 0, 0)
  };

  arrivalIsAfterDepartureError = false; // formModel's arrival time is after its departure time
  arrivalOverlapError = false;  // formModel's arrival time is between the arrival and departure times of an existing table entry
  departureOverlapError = false;  // formModel's departure time is between arrival and departure times of an existing table entry
  entryArrivalOverlapError = false; // The arrival and departure times of the formModel overlaps with the arrival time of an existing table entry
  entryDepartureOverlapError = false; // The arrival and departure times of the formModel overlaps with the departure time of an existing table entry

  constructor(
    private securityService: FalSecurityService
  ) { }

  ngOnInit() {
    this.validateData();
    this.portCallListDeepCopy = JSON.parse(JSON.stringify(this.portCallList)); // deep copying
    this.getSecurityLevelListSubscription = this.securityService.getSecurityLevelList().subscribe(
      data => {
        this.securityLevelList = data;
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.getSecurityLevelListSubscription.unsubscribe();
  }

  addTableEntry() {
    this.validateDateTime();
    const formModelCopy = JSON.parse(JSON.stringify(this.formModel)); // deep copy to avoid problems when formModel is reset
    this.portCallList.push(formModelCopy);
    this.touchData();
    this.resetModel();
  }

  /** Called on (delete) output from last-10-port-calls-table component */
  onRemoveTableEntry(row) {
    const index = this.portCallList.findIndex(entry => entry.sequenceNumber === row.portCall.sequenceNumber); // consider replacing with better check
    if (index !== -1) {
      this.portCallList.splice(index, 1); // remove entry from list
    }
    this.touchData();
  }

  /** Sorts list by arrival time (most recent first) and sets sequence numbers in that order */
  setSequenceNumbers() {
    if (this.portCallList.length > 0) {
      this.portCallList.sort((entry1, entry2) => {
        const date1 = new Date(entry1.arrivalDateTime);
        const date2 = new Date(entry2.arrivalDateTime);
        return date2.getTime() - date1.getTime();
      });
      this.portCallList.forEach((pc, index) => {
        pc.sequenceNumber = index + 1;
      });
    }
  }

  onLocationResult(location) {
    this.formModel.location = location;
    this.formModel.locationId = location.locationId;
    LocationProperties.setLocationData(this.locationData, this.formModel.location);
    if (this.formModel.location.country) {
      const twoCharCode = this.formModel.location.country.twoCharCode.toLowerCase() || 'xx';
      const countryFlag = twoCharCode + '.png';
      LocationProperties.setCountry(this.locationData, this.formModel.location.country.name, countryFlag);
    }
    this.locationFound = true;
  }

  deselectLocation() {
    this.locationFound = false;
    this.formModel.location = null;
    this.formModel.locationId = null;
  }

  onArrivalResult(arrivalResult) {
    if (arrivalResult) {
      this.arrivalModel = arrivalResult;
      this.formModel.arrivalDateTime = new Date(this.arrivalModel.date.year, this.arrivalModel.date.month - 1, this.arrivalModel.date.day, this.arrivalModel.time.hour, this.arrivalModel.time.minute);
    }
    this.validateDateTime();
  }

  onDepartureResult(departureResult) {
    if (departureResult) {
      this.departureModel = departureResult;
      this.formModel.departureDateTime = new Date(this.departureModel.date.year, this.departureModel.date.month - 1, this.departureModel.date.day, this.departureModel.time.hour, this.departureModel.time.minute);
    }
    this.validateDateTime();
  }

  onSecurityLevelResult(securityLevelResult) {
    this.formModel.securityLevelId = securityLevelResult.securityLevelId;
  }

  /** Checks for consistency errors in the arrival/departure times of the formModel and existing table entries. */
  private validateDateTime() {
    if (this.arrivalModel && this.arrivalModel.date && this.departureModel && this.departureModel.date) {
      this.arrivalIsAfterDepartureError = this.isAfter(this.arrivalModel, this.departureModel);
      this.arrivalOverlapError = false;
      this.departureOverlapError = false;
      this.entryArrivalOverlapError = false;
      this.entryDepartureOverlapError = false;
      if (this.portCallList && this.portCallList.length > 0) {
        this.portCallList.forEach(entry => {
          const entryArrivalDateTime = this.dateStringToDateTime(entry.arrivalDateTime);
          const entryDepartureDateTime = this.dateStringToDateTime(entry.departureDateTime);

          if (this.isAfter(this.arrivalModel, entryArrivalDateTime) && this.isAfter(entryDepartureDateTime, this.arrivalModel)) {
            this.arrivalOverlapError = true;
          }
          if (this.isAfter(this.departureModel, entryArrivalDateTime) && this.isAfter(entryDepartureDateTime, this.departureModel)) {
            this.departureOverlapError = true;
          }
          if (this.isAfter(entryArrivalDateTime, this.arrivalModel) && this.isAfter(this.departureModel, entryArrivalDateTime)) {
            this.entryArrivalOverlapError = true;
          }
          if (this.isAfter(entryDepartureDateTime, this.arrivalModel) && this.isAfter(this.departureModel, entryDepartureDateTime)) {
            this.entryDepartureOverlapError = true;
          }

        });
      }
    } else {
      this.arrivalIsAfterDepartureError = false;
      this.arrivalOverlapError = false;
      this.departureOverlapError = false;
      this.entryArrivalOverlapError = false;
      this.entryDepartureOverlapError = false;
    }
  }

  /** Converts dates in string format to DateTime format */
  private dateStringToDateTime(dateString) {
    const date = new Date(dateString);
    const dateTime: DateTime = {
      date: new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate()),
      time: new NgbTime(date.getHours(), date.getMinutes(), 0)
    };
    return dateTime;
  }

  /** Checks if one DateTime (dt1) is after another (dt2) */
  private isAfter(dt1: DateTime, dt2: DateTime) {
    if (dt1.date && dt2.date) {
      const dt1Date = new NgbDate(dt1.date.year, dt1.date.month, dt1.date.day);
      const dt2Date = new NgbDate(dt2.date.year, dt2.date.month, dt2.date.day);
      if (dt1Date.after(dt2Date)) {
        return true;
      }
      if (dt1Date.equals(dt2Date)) {
        if (dt1.time.hour > dt2.time.hour || (dt1.time.hour === dt2.time.hour && dt1.time.minute >= dt2.time.minute)) {
          return true;
        }
      }
    }
    return false;
  }

  /** Resets formModel so input fields are cleared. Called whenever a table entry is added. */
  private resetModel() {
    this.locationFound = false;
    this.arrivalModel = {
      date: null,
      time: new NgbTime(0, 0, 0)
    };
    this.departureModel = {
      date: null,
      time: new NgbTime(0, 0, 0)
    };
    this.formModel = new SecurityPreviousPortOfCallModel();
  }

  /** Called whenever a table entry is added or removed. */
  private touchData() {
    this.setSequenceNumbers();
    this.portCallListDeepCopy = JSON.parse(JSON.stringify(this.portCallList));
    this.securityService.setPristineData(false);
    this.validateData();
  }

  /** Checks that information required for saving is present. */
  private validateData() {
    this.securityService.setValidLast10PortCallsData(this.dataIsValid());
  }

  private dataIsValid() {
    return true; // can potentially be replaced with 'this.portCallList.length >= 10'
  }
}
