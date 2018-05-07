import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrganizationModel } from '../../../../../shared/models/organization-model';
import { ShipModel } from '../../../../../shared/models/ship-model';
import { ContentService } from '../../../../../shared/services/content.service';
import { ShipService } from '../../../../../shared/services/ship.service';
import { ContactModel } from '../../../../../shared/models/contact-model';
import { ContactService } from '../../../../../shared/services/contact.service';

@Component({
  selector: 'app-register-ship',
  templateUrl: './register-ship.component.html',
  styleUrls: ['./register-ship.component.css'],
  providers: [ShipModel, ShipService]
})
export class RegisterShipComponent implements OnInit {

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

  shipFlagCodeModel: any;
  organizationModel: OrganizationModel;

  shipFlagCodeSelected: boolean;
  organizationSelected: boolean;

  selectedContactModels: ContactModel[];

  // shipModel should be private, but Angular's AoT compilation can't handle it. Will be fixed in Angular 6.0
  constructor(public shipModel: ShipModel, private shipService: ShipService, private contactService: ContactService, private contentService: ContentService) { }

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

    this.shipService.shipFlagCodeData$.subscribe(
      data => {
        if (data) {
          this.shipFlagCodeModel = data;
          this.shipModel.shipFlagCodeId = data.shipFlagCode.shipFlagCodeId;
          this.shipFlagCodeSelected = true;
        } else {
          this.shipFlagCodeSelected = false;
        }
      }
    );

    this.shipService.organizationData$.subscribe(
      data => {
        if (data) {
          this.organizationModel = data;
          this.shipModel.organizationId = data.organizationId;
          this.organizationSelected = true;
        } else {
          this.organizationSelected = false;
        }
      }
    );
    
    this.contactService.contactData$.subscribe(
      data => {
        if (data) {
          this.selectedContactModels = data;
        }
      }
    );
  }

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

  formatter = (x: { name: string }) => x.name;

  selectShipType($event: any) {
    this.shipModel.shipTypeId = $event.item.shipTypeId;
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

  registerShip() {
    this.shipService.registerShip(this.shipModel).subscribe(
      result => {
        console.log(result);
        this.goBack();
      }, error => {
        console.log(error);        
      }
    );
  }

  private goBack() {
    this.contentService.setContent('Port Call');
  }

}
