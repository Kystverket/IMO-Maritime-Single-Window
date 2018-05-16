import { Component, OnInit } from '@angular/core';
import { ShipProperties } from '../../../../../shared/constants/ship-properties';
import { ConstantsService } from '../../../../../shared/services/constants.service';
import { PortCallService } from '../../../../../shared/services/port-call.service';

const LOCATION = "Location:";
const LOCATION_CODE = "Location Code:";
const ETA = "ETA:";
const ETD = "ETD:";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [ConstantsService]
})
export class InfoComponent implements OnInit {

  shipFlag: string;
  locationFlag: string;

  shipProperties = ShipProperties.PROPERTIES;
  portCallShipInfo: any[];


  shipContactInfo: any[] = [];

  portCallLocationInfo: any[] = [
    { description: LOCATION, data: null },
    { description: LOCATION_CODE, data: null },
    { description: ETA, data: null },
    { description: ETD, data: null }
  ];

  contactMediumList: any;

  shipHasContactInfo: boolean = false;

  constructor(private constantsService: ConstantsService, private portCallService: PortCallService) { }

  ngOnInit() {
    // Ship
    this.portCallService.shipData$.subscribe(
      shipResult => {
        if (shipResult) {
          if (shipResult.country) this.shipFlag = shipResult.country.twoCharCode.toLowerCase();
          if (shipResult.shipType) this.shipProperties.SHIP_TYPE.data = shipResult.shipType.name;
          if (shipResult.shipStatus) this.shipProperties.SHIP_STATUS.data = shipResult.shipStatus.name;
          this.shipProperties.SHIP_NAME.data = shipResult.ship.name;
          this.shipProperties.CALL_SIGN.data = shipResult.ship.callSign;
          this.shipProperties.IMO_NO.data = shipResult.ship.imoNo;
          this.shipProperties.MMSI_NO.data = shipResult.ship.mmsiNo;
          this.shipProperties.GROSS_TONNAGE.data = shipResult.ship.grossTonnage;
          this.shipProperties.LENGTH.data = shipResult.ship.length;

          this.constantsService.getContactMediumList().subscribe(
            contactResult => {
              if (contactResult) {
                this.contactMediumList = contactResult;
                if (contactResult && shipResult.contactList != null && shipResult.contactList.length > 0) {
                  this.shipHasContactInfo = true;
                  this.contactMediumList.forEach(contactMedium => {
                    let value = shipResult.contactList.find(shipCM => shipCM.contactMediumId == contactMedium.contactMediumId);
                    if (value) {
                      this.shipContactInfo.push({ description: contactMedium.contactMediumType + ":", data: value.contactValue, isPreferred: value.isPreferred })
                    }
                  });
                }
              }
            }
          );
        } else {
          this.shipProperties = ShipProperties.PROPERTIES;
        }
        this.portCallShipInfo = Object.values(this.shipProperties);
      }
    );
    // Location
    this.portCallService.locationData$.subscribe(
      locationData => {
        if (locationData) {
          if (locationData.country) this.locationFlag = locationData.country.twoCharCode.toLowerCase();
          this.portCallLocationInfo.find(p => p.description == LOCATION).data = locationData.location.name;
          this.portCallLocationInfo.find(p => p.description == LOCATION_CODE).data = locationData.location.locationCode;
        }
      }
    );
    // ETA/ETD
    this.portCallService.etaEtdData$.subscribe(
      data => {
        if (data != null) {
          let eta = data.eta.year + "-" + this.dateTimeFormat(data.eta.month) + "-" + this.dateTimeFormat(data.eta.day)
            + " " + this.dateTimeFormat(data.eta.hour) + ":" + this.dateTimeFormat(data.eta.minute);
          let etd = data.etd.year + "-" + this.dateTimeFormat(data.etd.month) + "-" + this.dateTimeFormat(data.etd.day)
            + " " + this.dateTimeFormat(data.etd.hour) + ":" + this.dateTimeFormat(data.etd.minute);

          this.portCallLocationInfo.find(p => p.description == ETA).data = eta;
          this.portCallLocationInfo.find(p => p.description == ETD).data = etd;
        }
      }
    );
  }

  private dateTimeFormat(number: number) {
    if (number <= 9) {
      return "0" + number;
    } else {
      return number;
    }
  }

}
