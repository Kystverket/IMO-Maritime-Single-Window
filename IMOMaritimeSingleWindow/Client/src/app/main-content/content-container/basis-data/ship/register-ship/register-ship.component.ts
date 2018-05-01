import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShipModel } from '../../../../../shared/models/ship-model';
import { ShipService } from '../../../../../shared/services/ship.service';

@Component({
  selector: 'app-register-ship',
  templateUrl: './register-ship.component.html',
  styleUrls: ['./register-ship.component.css'],
  providers: [ShipModel, ShipService]
})
export class RegisterShipComponent implements OnInit {

  countrySelected: boolean;
  organizationSelected: boolean;
  shipFlagCodeSelected: boolean;

  hullTypeSelected = false;
  lengthTypeSelected = false;
  breadthTypeSelected = false;
  powerTypeSelected = false;

  shipTypeList: any[];
  hullTypeList: any[];
  lengthTypeList: any[];
  breadthTypeList: any[];
  powerTypeList: any[];

  selectedShipType: any;
  shipTypeSelected: boolean = false;
  shipTypeSearchFailed: boolean = false;

  hullTypeDropdownString: string = "Select hull type";
  lengthTypeDropdownString: string = "Select type";
  breadthTypeDropdownString: string = "Select type";
  powerTypeDropdownString: string = "Select type";

  // shipModel should be private, but Angular's AoT compilation can't handle it. Will be fixed in Angular 6.0
  constructor(public shipModel: ShipModel, private shipService: ShipService) { }

  shipTypeSearch = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .do(() => {
        this.shipTypeSearchFailed = false;
      })
      .map(term => term.length < 2 ? []
        : this.shipTypeList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      )
      .do((text$) => {
        if (text$.length == 0) {          
          this.shipTypeSearchFailed = true;
        }
      });

  formatter = (x: {name: string}) => x.name;

  selectShipType(shipType: any) {
    this.shipModel.shipTypeId = shipType.shipTypeId;
    this.shipTypeSelected = true;
  }

  deselectShipType() {
    this.shipModel.shipTypeId = null;
    this.selectedShipType = null;
    this.shipTypeSelected = false;
  }

  selectHullType(hullType: any) {
    this.shipModel.shipHullTypeId = hullType.shipHullTypeId;
    this.hullTypeDropdownString = hullType.name;
    this.hullTypeSelected = true;
  }

  selectLengthType(lengthType: any) {
    this.shipModel.shipLengthTypeId = lengthType.shipLengthTypeId;
    this.lengthTypeDropdownString = lengthType.name;
    this.lengthTypeSelected = true;
  }

  selectBreadthType(breadthType: any) {
    this.shipModel.shipBreadthTypeId = breadthType.shipBreadthTypeId;
    this.breadthTypeDropdownString = breadthType.name;
    this.breadthTypeSelected = true;
  }

  selectPowerType(powerType: any) {
    this.shipModel.shipPowerTypeId = powerType.shipPowerTypeId;
    this.powerTypeDropdownString = powerType.name;
    this.powerTypeSelected = true;
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

    this.shipService.organizationData$.subscribe(
      data => {
        this.organizationSelected = data != null;
        if (this.organizationSelected) {
          this.shipModel.organizationId = data.organizationId;
        }
      }
    );

    this.shipService.shipFlagCodeData$.subscribe(
      data => {
        this.shipFlagCodeSelected = data != null;
        if (this.shipFlagCodeSelected) {
          this.shipModel.shipFlagCodeId = data.shipFlagCode.shipFlagCodeId;
        }
      }
    );

  }

}
