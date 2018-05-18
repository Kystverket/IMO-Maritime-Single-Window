import { Component, OnInit } from '@angular/core';
import { ShipProperties } from '../../constants/ship-properties';
import { ConstantsService } from '../../services/constants.service';
import { ShipService } from '../../services/ship.service';

@Component({
  selector: 'app-ship-info-table',
  templateUrl: './ship-info-table.component.html',
  styleUrls: ['./ship-info-table.component.css']
})
export class ShipInfoTableComponent implements OnInit {

  shipFlag: string;
  contactMediumList: any;
  shipHasContactInfo: boolean;
  shipContactInfo: any[] = [];

  shipProperties: any = ShipProperties.PROPERTIES;
  shipInfo: any[];

  constructor(private shipService: ShipService, private constantsService: ConstantsService) { }

  ngOnInit() {
    this.shipHasContactInfo = false;
    this.shipService.shipOverviewData$.subscribe(
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
          this.shipFlag = null;
          this.shipProperties = ShipProperties.PROPERTIES;
        }
        this.shipInfo = Object.values(this.shipProperties);
      }
    );
  }
}
