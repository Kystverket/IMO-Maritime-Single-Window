import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShipProperties } from 'app/shared/constants/ship-properties';
import { ConstantsService, ShipService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-ship-info-table',
  templateUrl: './ship-info-table.component.html',
  styleUrls: ['./ship-info-table.component.css']
})
export class ShipInfoTableComponent implements OnInit, OnDestroy {
  shipFlag: string;
  contactMediumList: any;
  shipHasContactInfo: boolean;
  shipContactInfo: any[] = [];

  shipProperties: any = ShipProperties.PROPERTIES;
  shipInfo: any[];

  shipDataSubscription: Subscription;

  constructor(
    private shipService: ShipService,
    private constantsService: ConstantsService
  ) { }

  ngOnInit() {
    this.shipHasContactInfo = false;
    this.shipDataSubscription = this.shipService.shipData$.subscribe(shipResult => {
      if (shipResult) {
        if (shipResult.shipFlagCode.country) {
          this.shipFlag = shipResult.shipFlagCode.country.twoCharCode.toLowerCase();
        }
        if (shipResult.shipType) {
          this.shipProperties.SHIP_TYPE.data = shipResult.shipType.name;
        }
        if (shipResult.shipStatus) {
          this.shipProperties.SHIP_STATUS.data = shipResult.shipStatus.name;
        }
        this.shipProperties.SHIP_NAME.data = shipResult.name;
        this.shipProperties.CALL_SIGN.data = shipResult.callSign;
        this.shipProperties.IMO_NO.data = shipResult.imoNo;
        this.shipProperties.MMSI_NO.data = shipResult.mmsiNo;
        this.shipProperties.GROSS_TONNAGE.data = shipResult.grossTonnage;
        this.shipProperties.LENGTH.data = shipResult.length;

        this.constantsService.getContactMediumList().subscribe(
          contactResult => {
            if (contactResult) {
              this.contactMediumList = contactResult;
              if (contactResult && shipResult.shipContact != null && shipResult.shipContact.length > 0) {
                this.shipHasContactInfo = true;
                this.contactMediumList.forEach(contactMedium => {
                  const value = shipResult.shipContact.find(shipCM => shipCM.contactMediumId === contactMedium.contactMediumId);
                  if (value && (this.shipContactInfo.find(sc => sc.description === (contactMedium.contactMediumType)) == null)) {
                    this.shipContactInfo.push({
                      description: contactMedium.contactMediumType,
                      data: value.contactValue,
                      isPreferred: value.isPreferred
                    });
                  }
                });
              }
            }
          });
      } else {
        this.shipFlag = null;
        this.shipProperties = ShipProperties.PROPERTIES;
      }
      this.shipInfo = Object.values(this.shipProperties);
    });
  }

  ngOnDestroy() {
    this.shipDataSubscription.unsubscribe();
  }
}
