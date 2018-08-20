import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../../../../../../shared/models/location-model';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { LocationProperties } from '../../../../../../../shared/constants/location-properties';
import { NgbTime } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { SecurityPreviousPortOfCallModel } from '../../../../../../../shared/models/security-previous-port-of-call-model';
import { Subscription } from '../../../../../../../../../node_modules/rxjs/Subscription';
import { SecurityLevelModel } from 'app/shared/models/security-level-model';
import { FalSecurityService } from '../../../../../../../shared/services/fal-security.service';
import { NgbDate } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-last-10-port-calls',
  templateUrl: './last-10-port-calls.component.html',
  styleUrls: ['./last-10-port-calls.component.css']
})
export class Last10PortCallsComponent implements OnInit {

  locationFound = false;
  locationData = new LocationProperties().getPropertyList();
  portCallList: SecurityPreviousPortOfCallModel[] = [];
  portCallModel: SecurityPreviousPortOfCallModel = new SecurityPreviousPortOfCallModel();

  arrivalModel: DateTime = {
    date: null,
    time: new NgbTime(0, 0, 0)
  };
  departureModel: DateTime = {
    date: null,
    time: new NgbTime(0, 0, 0)
  };

  arrivalIsAfterDepartureError = false;
  arrivalOverlapError = false;
  departureOverlapError = false;
  entryArrivalOverlapError = false;
  entryDepartureOverlapError = false;

  securityLevelList: SecurityLevelModel[];
  getSecurityLevelListSubscription: Subscription;

  constructor(
    private securityService: FalSecurityService
  ) { }

  ngOnInit() {
    this.getSecurityLevelListSubscription = this.securityService.getSecurityLevelList().subscribe(
      data => {
        this.securityLevelList = data;
      }, error => {
        console.log(error);
      }
    );
  }

  addPortCallEntry() {
    this.validateDateTime();
    const portCallCopy = JSON.parse(JSON.stringify(this.portCallModel));
    this.portCallList = [...this.portCallList, portCallCopy];
    this.resetModel();
  }

  onLocationResult(location) {
    this.portCallModel.location = location;
    LocationProperties.setLocationData(this.locationData, this.portCallModel.location);
    if (this.portCallModel.location.country) {
      const twoCharCode = this.portCallModel.location.country.twoCharCode.toLowerCase() || 'xx';
      const countryFlag = twoCharCode + '.png';
      LocationProperties.setCountry(this.locationData, this.portCallModel.location.country.name, countryFlag);
    }
    this.locationFound = true;
  }

  deselectLocation() {
    this.locationFound = false;
    this.portCallModel.location = null;
  }

  onArrivalResult(arrivalResult) {
    if (arrivalResult) {
      this.arrivalModel = arrivalResult;
      this.portCallModel.arrivalDateTime = new Date(this.arrivalModel.date.year, this.arrivalModel.date.month - 1, this.arrivalModel.date.day, this.arrivalModel.time.hour, this.arrivalModel.time.minute);
    }
    this.validateDateTime();
  }

  onDepartureResult(departureResult) {
    if (departureResult) {
      this.departureModel = departureResult;
      this.portCallModel.departureDateTime = new Date(this.departureModel.date.year, this.departureModel.date.month - 1, this.departureModel.date.day, this.departureModel.time.hour, this.departureModel.time.minute);
    }
    this.validateDateTime();
  }

  onSecurityLevelResult(securityLevelResult) {
    this.portCallModel.securityLevelId = securityLevelResult.securityLevelId;
  }

  onDeletePortCall(row) {
    this.portCallList = this.portCallList.filter(entry => entry !== row.portCall);
  }

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

  private dateStringToDateTime(dateString) {
    const date = new Date(dateString);
    const dateTime: DateTime = {
      date: new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate()),
      time: new NgbTime(date.getHours(), date.getMinutes(), 0)
    };
    return dateTime;
  }

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
    this.portCallModel = new SecurityPreviousPortOfCallModel();
  }

}
