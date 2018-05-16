import { Component, OnInit } from '@angular/core';
import { ShipProperties } from '../../../../../shared/constants/ship-properties';
import { ConstantsService } from '../../../../../shared/services/constants.service';
import { ContentService } from '../../../../../shared/services/content.service';
import { ShipService } from '../../../../../shared/services/ship.service';

@Component({
  selector: 'app-view-ship-info',
  templateUrl: './view-ship-info.component.html',
  styleUrls: ['./view-ship-info.component.css'],
  providers: [ConstantsService]
})
export class ViewShipInfoComponent implements OnInit {

  shipFlag: string;
  contactMediumList: any;
  shipHasContactInfo: boolean = false;
  shipContactInfo: any[] = [];
  shipFound: boolean = false;

  shipProperties: any = ShipProperties.PROPERTIES;
  shipInfo: any[];

  deselectShip() {
    this.shipFound = false;
    this.shipService.setShipOverviewData(null);
  }

  registerNewShip() {
    this.contentService.setContent("Register Ship");
  }

  constructor(private shipService: ShipService, private constantsService: ConstantsService, private contentService: ContentService) { }

  ngOnInit() {
    this.shipService.setShipOverviewData(null);
    this.shipService.shipOverviewData$.subscribe(
      shipResult => {
        if (shipResult) {
          this.shipFound = true;
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
          this.shipFound = false;
          this.shipProperties = ShipProperties.PROPERTIES;
        }
        this.shipInfo = Object.values(this.shipProperties);
      }
    );
  }
}
