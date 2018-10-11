import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShipToShipActivityModel } from '../../../../../../../shared/models/ship-to-ship-activity-model';
import { DateTime } from '../../../../../../../shared/interfaces/dateTime.interface';
import { NgbDate } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { PortCallPurposeModel } from '../../../../../../../shared/models/port-call-purpose-model';
import { Subscription } from '../../../../../../../../../node_modules/rxjs';
import { FalSecurityService, PurposeService,  } from '../../../../../../../shared/services/';
import { LocationProperties } from '../../../../../../../shared/constants/location-properties';

@Component({
  selector: 'app-ship-to-ship-activity',
  templateUrl: './ship-to-ship-activity.component.html',
  styleUrls: ['./ship-to-ship-activity.component.css'],
  providers: [PurposeService]
})
export class ShipToShipActivityComponent implements OnInit, OnDestroy {

  @Input() shipToShipActivityList: ShipToShipActivityModel[];
  shipToShipActivityListDeepCopy: ShipToShipActivityModel[] = [];
  formModel: ShipToShipActivityModel = new ShipToShipActivityModel();
  latitudeDirection = 1;
  longitudeDirection = 1;
  locationFound = false;
  locationData = new LocationProperties().getPropertyList();
  fromDateModel: DateTime = {
    date: null,
    time: new NgbTime(0, 0, 0)
  };
  toDateModel: DateTime = {
    date: null,
    time: new NgbTime(0, 0, 0)
  };
  activityTypeList: PortCallPurposeModel[] = [];
  activityTypeListSubscription: Subscription;

  fromDateIsAfterToDateError = false;

  constructor(
    private securityService: FalSecurityService,
    private purposeService: PurposeService
  ) { }

  ngOnInit() {
    this.validateData();
    this.shipToShipActivityListDeepCopy = JSON.parse(JSON.stringify(this.shipToShipActivityList));
    this.activityTypeListSubscription = this.purposeService.getPurposes().subscribe(
      result => {
        this.activityTypeList = result;
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.activityTypeListSubscription.unsubscribe();
  }

  /** Sorts list by fromDate (most recent first) */
  sortList() {
    if (this.shipToShipActivityList.length > 0) {
      this.shipToShipActivityList.sort((entry1, entry2) => {
        const date1 = new Date(entry1.fromDate);
        const date2 = new Date(entry2.fromDate);
        return date2.getTime() - date1.getTime();
      });
    }
  }

  addShipToShipActivity() {
    this.validateDateTime();
    const shipToShipActivityCopy = JSON.parse(JSON.stringify(this.formModel));
    this.shipToShipActivityList.push(shipToShipActivityCopy);
    this.touchData();
    this.resetModel();
  }

  /** Called on (delete) output from ship-to-ship-activity-table component */
  onDeleteShipToShipActivity(row) {
    const index = this.shipToShipActivityListDeepCopy.findIndex(entry => entry.fromDate === row.shipToShipActivity.fromDate);
    if (index !== -1) {
      this.shipToShipActivityList.splice(index, 1);
    }
    this.touchData();
  }

  onFromDateResult(fromDateResult) {
    if (fromDateResult) {
      this.fromDateModel = fromDateResult;
      this.formModel.fromDate = new Date(this.fromDateModel.date.year, this.fromDateModel.date.month - 1, this.fromDateModel.date.day, this.fromDateModel.time.hour, this.fromDateModel.time.minute);
    }
    this.validateDateTime();
  }

  onToDateResult(toDateResult) {
    if (toDateResult) {
      this.toDateModel = toDateResult;
      this.formModel.toDate = new Date(this.toDateModel.date.year, this.toDateModel.date.month - 1, this.toDateModel.date.day, this.toDateModel.time.hour, this.toDateModel.time.minute);
    }
    this.validateDateTime();
  }

  /** Not currently in use. */
  onLatitudeInput(latitudeResult) {
    this.formModel.latitude = latitudeResult * this.latitudeDirection;
  }

  /** Not currently in use. */
  onLongitudeInput(longitudeResult) {
    this.formModel.longitude = longitudeResult * this.longitudeDirection;
  }

  onLocationResult(locationResult) {
    this.formModel.locationId = locationResult.locationId;
    this.formModel.location = locationResult;
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
    this.formModel.locationId = null;
    this.formModel.location = null;
  }

  onActivityTypeResult(activityType) {
    this.formModel.activityType = activityType;
    this.formModel.activityTypeId = activityType.portCallPurposeId;
  }

  /** Resets formModel so input fields are cleared. Called whenever a table entry is added. */
  private resetModel() {
    this.locationFound = false;
    this.fromDateModel = {
      date: null,
      time: new NgbTime(0, 0, 0)
    };
    this.toDateModel = {
      date: null,
      time: new NgbTime(0, 0, 0)
    };
    this.formModel = new ShipToShipActivityModel();
  }

  /** Checks for consistency error in fromDate/toDate of the formModel. Can potentially be expanded (see: last-10-port-calls component). */
  private validateDateTime() {
    if (this.fromDateModel && this.fromDateModel.date && this.toDateModel && this.toDateModel.date) {
      this.fromDateIsAfterToDateError = this.isAfter(this.fromDateModel, this.toDateModel);
    } else {
      this.fromDateIsAfterToDateError = false;
    }
  }

  /** Not currently in use, can be useful if more date validation is added (see: last-10-port-calls component). */
  private dateStringToDateTime(dateString) {
    const date = new Date(dateString);
    const dateTime: DateTime = {
      date: new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate()),
      time: new NgbTime(date.getHours(), date.getMinutes(), 0)
    };
    return dateTime;
  }

  /** Checks if one DateTime (dt1) is after another (dt2). */
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

  /** Called whenever a table entry is added or removed. */
  private touchData() {
    this.sortList();
    this.shipToShipActivityListDeepCopy = JSON.parse(JSON.stringify(this.shipToShipActivityList));
    this.securityService.setPristineData(false);
    this.validateData();
  }

  /** Checks that information required for saving is present. */
  private validateData() {
    this.securityService.setValidShipToShipActivityData(this.dataIsValid());
  }

  private dataIsValid() {
    return true; // can potentially be replaced with 'this.shipToShipActivityList.length >= 10'
  }

}
