import { Component, OnInit, Input } from '@angular/core';
import { ShipToShipActivityModel } from '../../../../../../../shared/models/ship-to-ship-activity-model';
import { DateTime } from '../../../../../../../shared/interfaces/dateTime.interface';
import { NgbDate } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { PortCallPurposeModel } from '../../../../../../../shared/models/port-call-purpose-model';
import { Subscription } from '../../../../../../../../../node_modules/rxjs';
import { PortCallService } from '../../../../../../../shared/services/port-call.service';
import { PurposeService } from '../../../../../../../shared/services/purpose.service';
import { LocationProperties } from '../../../../../../../shared/constants/location-properties';
import { FalSecurityService } from '../../../../../../../shared/services/fal-security.service';

@Component({
  selector: 'app-ship-to-ship-activity',
  templateUrl: './ship-to-ship-activity.component.html',
  styleUrls: ['./ship-to-ship-activity.component.css'],
  providers: [PurposeService]
})
export class ShipToShipActivityComponent implements OnInit {

  @Input() shipToShipActivityList: ShipToShipActivityModel[];
  tableList: ShipToShipActivityModel[] = [];
  shipToShipActivityModel: ShipToShipActivityModel = new ShipToShipActivityModel();
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
    this.tableList = JSON.parse(JSON.stringify(this.shipToShipActivityList));
    this.activityTypeListSubscription = this.purposeService.getPurposes().subscribe(
      result => {
        this.activityTypeList = result;
      }, error => {
        console.log(error);
      }
    );
  }

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
    const shipToShipActivityCopy = JSON.parse(JSON.stringify(this.shipToShipActivityModel));
    this.shipToShipActivityList.push(shipToShipActivityCopy);
    this.touchData();
    this.resetModel();
  }

  onDeleteShipToShipActivity(row) {
    const index = this.tableList.findIndex(entry => entry.fromDate === row.shipToShipActivity.fromDate);
    if (index !== -1) {
      this.shipToShipActivityList.splice(index, 1);
    }
    this.touchData();
  }

  onFromDateResult(fromDateResult) {
    if (fromDateResult) {
      this.fromDateModel = fromDateResult;
      this.shipToShipActivityModel.fromDate = new Date(this.fromDateModel.date.year, this.fromDateModel.date.month - 1, this.fromDateModel.date.day, this.fromDateModel.time.hour, this.fromDateModel.time.minute);
    }
    this.validateDateTime();
  }

  onToDateResult(toDateResult) {
    if (toDateResult) {
      this.toDateModel = toDateResult;
      this.shipToShipActivityModel.toDate = new Date(this.toDateModel.date.year, this.toDateModel.date.month - 1, this.toDateModel.date.day, this.toDateModel.time.hour, this.toDateModel.time.minute);
    }
    this.validateDateTime();
  }

  onLatitudeInput(latitudeResult) {
    console.log(latitudeResult);
    this.shipToShipActivityModel.latitude = latitudeResult * this.latitudeDirection;
  }

  onLongitudeInput(longitudeResult) {
    console.log(longitudeResult);
    this.shipToShipActivityModel.longitude = longitudeResult * this.longitudeDirection;
  }

  onLocationResult(locationResult) {
    this.shipToShipActivityModel.locationId = locationResult.locationId;
    this.shipToShipActivityModel.location = locationResult;
    LocationProperties.setLocationData(this.locationData, this.shipToShipActivityModel.location);
    if (this.shipToShipActivityModel.location.country) {
      const twoCharCode = this.shipToShipActivityModel.location.country.twoCharCode.toLowerCase() || 'xx';
      const countryFlag = twoCharCode + '.png';
      LocationProperties.setCountry(this.locationData, this.shipToShipActivityModel.location.country.name, countryFlag);
    }
    this.locationFound = true;
  }

  deselectLocation() {
    this.locationFound = false;
    this.shipToShipActivityModel.locationId = null;
    this.shipToShipActivityModel.location = null;
  }

  onActivityTypeResult(activityType) {
    this.shipToShipActivityModel.activityType = activityType;
    this.shipToShipActivityModel.activityTypeId = activityType.portCallPurposeId;
  }

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
    this.shipToShipActivityModel = new ShipToShipActivityModel();
  }

  private validateDateTime() {
    if (this.fromDateModel && this.fromDateModel.date && this.toDateModel && this.toDateModel.date) {
      this.fromDateIsAfterToDateError = this.isAfter(this.fromDateModel, this.toDateModel);
    } else {
      this.fromDateIsAfterToDateError = false;
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

  private touchData() {
    this.sortList();
    this.tableList = JSON.parse(JSON.stringify(this.shipToShipActivityList));
    this.securityService.setPristineData(false);
    this.validateData();
  }

  private validateData() {
    this.securityService.setValidShipToShipActivityData(this.dataIsValid());
  }

  private dataIsValid() {
    return true; // can potentially be replaced with 'this.shipToShipActivityList.length >= 10'
  }

}
