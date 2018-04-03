import { Component, OnInit } from '@angular/core';
import { ShipService } from '../../../../shared/services/ship.service'
import { Observable } from 'rxjs/Observable';
import { ShipModel } from '../../../../shared/models/ship-model';

@Component({
  selector: 'app-register-ship',
  templateUrl: './register-ship.component.html',
  styleUrls: ['./register-ship.component.css'],
  providers: [ShipModel, ShipService]
})
export class RegisterShipComponent implements OnInit {

  countrySelected: boolean;
  companySelected: boolean;
  shipFlagCodeSelected: boolean;

  shipTypeSelected = false;
  hullTypeSelected = false;
  lengthTypeSelected = false;
  breadthTypeSelected = false;
  powerTypeSelected = false;
  shipSourceSelected = false;

  shipTypeList: any[];
  hullTypeList: any[];
  lengthTypeList: any[];
  breadthTypeList: any[];
  powerTypeList: any[];
  shipSourceList: any[];

  shipTypeDropdownString: string = "Select ship type";
  hullTypeDropdownString: string = "Select hull type";
  lengthTypeDropdownString: string = "Select type";
  breadthTypeDropdownString: string = "Select type";
  powerTypeDropdownString: string = "Select type";
  shipSourceDropdownString: string = "Select ship source";


  // shipModel should be private, but Angular's AoT compilation can't handle it. Will be fixed in Angular 6.0
  constructor(public shipModel: ShipModel, private shipService: ShipService) { }

  selectShipType(shipType: any) {
    this.shipModel.shipTypeId = shipType.shipTypeId;
    this.shipTypeDropdownString = shipType.shipType1;
    this.shipTypeSelected = true;
  }

  selectHullType(hullType: any) {
    this.shipModel.shipHullTypeId = hullType.shipHullTypeId;
    this.hullTypeDropdownString = hullType.shipHullType1;
    this.hullTypeSelected = true;
  }

  selectLengthType(lengthType: any) {
    this.shipModel.shipLengthTypeId = lengthType.shipLengthTypeId;
    this.lengthTypeDropdownString = lengthType.shipLengthType1;
    this.lengthTypeSelected = true;
  }

  selectBreadthType(breadthType: any) {
    this.shipModel.shipBreadthTypeId = breadthType.shipBreadthTypeId;
    this.breadthTypeDropdownString = breadthType.shipBreadthType1;
    this.breadthTypeSelected = true;
  }

  selectPowerType(powerType: any) {
    this.shipModel.shipPowerTypeId = powerType.shipPowerTypeId;
    this.powerTypeDropdownString = powerType.shipPowerType1;
    this.powerTypeSelected = true;
  }

  selectShipSource(shipSource: any) {
    this.shipModel.shipSourceId = shipSource.shipSourceId;
    this.shipSourceDropdownString = shipSource.shipSource1;
    this.shipSourceSelected = true;
  }

  registerShip(newShip: any) {
    this.shipService.registerShip(newShip);
  }



  ngOnInit() {
    this.shipService.getShipTypes().subscribe(
      data => this.shipTypeList = data
    );
    this.shipService.getHullTypes().subscribe(
      data => this.hullTypeList = data
    );
    this.shipService.getLengthTypes().subscribe(
      data => this.lengthTypeList = data
    );
    this.shipService.getBreadthTypes().subscribe(
      data => this.breadthTypeList = data
    );
    this.shipService.getPowerTypes().subscribe(
      data => this.powerTypeList = data
    );
    this.shipService.getShipSources().subscribe(
      data => this.shipSourceList = data
    );

    this.shipService.companyData$.subscribe(
      data => {
        this.companySelected = data != null;
        if (this.companySelected) {
          this.shipModel.companyId = data.companyId;
        }
      }
    );

    this.shipService.shipFlagCodeData$.subscribe(
      data => { 
        this.shipFlagCodeSelected = data != null;
        if (this.shipFlagCodeSelected) {
          this.shipModel.shipFlagCodeId = data.shipFlagCodeId;
        }
       }
    );



  }

}
