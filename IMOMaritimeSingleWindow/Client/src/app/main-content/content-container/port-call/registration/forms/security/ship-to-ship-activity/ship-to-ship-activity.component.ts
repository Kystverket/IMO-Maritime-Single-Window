import { Component, OnInit } from '@angular/core';
import { ShipToShipActivityModel } from '../../../../../../../shared/models/ship-to-ship-activity-model';
import { DateTime } from '../../../../../../../shared/interfaces/dateTime.interface';
import { NgbDate } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { PortCallPurposeModel } from '../../../../../../../shared/models/port-call-purpose-model';
import { Subscription } from '../../../../../../../../../node_modules/rxjs';
import { PortCallService } from '../../../../../../../shared/services/port-call.service';
import { PurposeService } from '../../../../../../../shared/services/purpose.service';
import { LocationProperties } from '../../../../../../../shared/constants/location-properties';

@Component({
  selector: 'app-ship-to-ship-activity',
  templateUrl: './ship-to-ship-activity.component.html',
  styleUrls: ['./ship-to-ship-activity.component.css'],
  providers: [PurposeService]
})
export class ShipToShipActivityComponent implements OnInit {

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
  shipToShipActivityList: ShipToShipActivityModel[] = [];

  constructor(
    private purposeService: PurposeService
  ) { }

  ngOnInit() {
    this.activityTypeListSubscription = this.purposeService.getPurposes().subscribe(
      result => {
        this.activityTypeList = result;
      }, error => {
        console.log(error);
      }
    );
  }

  addShipToShipActivity() {
    const shipToShipActivityCopy = JSON.parse(JSON.stringify(this.shipToShipActivityModel));
    this.shipToShipActivityList = [...this.shipToShipActivityList, shipToShipActivityCopy];
    this.resetModel();
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

  onFromDateResult(fromDateResult) {
    if (fromDateResult) {
      this.fromDateModel = fromDateResult;
      this.shipToShipActivityModel.fromDate = new Date(this.fromDateModel.date.year, this.fromDateModel.date.month - 1, this.fromDateModel.date.day, this.fromDateModel.time.hour, this.fromDateModel.time.minute);
    }
  }

  onToDateResult(toDateResult) {
    if (toDateResult) {
      this.toDateModel = toDateResult;
      this.shipToShipActivityModel.toDate = new Date(this.toDateModel.date.year, this.toDateModel.date.month - 1, this.toDateModel.date.day, this.toDateModel.time.hour, this.toDateModel.time.minute);
    }
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

  onDeleteShipToShipActivity(row) {
    this.shipToShipActivityList = this.shipToShipActivityList.filter(entry => entry !== row.shipToShipActivity);
  }

}
