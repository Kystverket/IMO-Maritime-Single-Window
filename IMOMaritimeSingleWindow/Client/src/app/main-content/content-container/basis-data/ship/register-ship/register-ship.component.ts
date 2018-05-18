import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { ConfirmationModalComponent } from '../../../../../shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from '../../../../../shared/constants/content-names';
import { ContactModel } from '../../../../../shared/models/contact-model';
import { ShipContactModel } from '../../../../../shared/models/ship-contact-model';
import { ShipModel } from '../../../../../shared/models/ship-model';
import { ContactService } from '../../../../../shared/services/contact.service';
import { ContentService } from '../../../../../shared/services/content.service';
import { OrganizationService } from '../../../../../shared/services/organization.service';
import { ShipService } from '../../../../../shared/services/ship.service';

const RESULT_SUCCES: string = "Ship was successfully saved to the database.";
const RESULT_FAILURE: string = "There was a problem when trying to save the ship to the database. Please try again later.";
const RESULT_SAVED_WITHOUT_CONTACT: string = "Ship was saved to the database, but there was an error when trying to save the ship's contact information. Please provide this information later.";

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
  shipStatusSelected = false;

  shipTypeList: any[];
  hullTypeList: any[];
  lengthTypeList: any[];
  breadthTypeList: any[];
  powerTypeList: any[];
  shipStatusList: any[];

  selectedShipType: any;
  shipTypeSelected: boolean = false;
  shipTypeSearchFailed: boolean = false;

  hullTypeDropdownString: string = "Select hull type";
  lengthTypeDropdownString: string = "Select type";
  breadthTypeDropdownString: string = "Select type";
  powerTypeDropdownString: string = "Select type";
  shipStatusDropdownString: string = "Select status";

  shipFlagCodeModel: any;
  organizationModel: any;
  selectedContactModels: ContactModel[];

  shipFlagCodeSelected: boolean;
  organizationSelected: boolean;
  contactSelected: boolean;

  // shipModel should be private, but Angular's AoT compilation can't handle it. Will be fixed in Angular 6.0
  constructor(public shipModel: ShipModel, private shipService: ShipService, private contactService: ContactService,
    private contentService: ContentService, private modalService: NgbModal, private organizationService: OrganizationService) { }

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
    this.shipService.getShipStatusList().subscribe(
      data => this.shipStatusList = data
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

    this.organizationService.setOrganizationData(null);
    this.organizationService.organizationData$.subscribe(
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

    this.contactService.wipeServiceData();
    this.contactService.contactData$.subscribe(
      data => {
        if (data && data.length !== 0) {
          this.selectedContactModels = data;
          this.contactSelected = true;
        } else {
          this.contactSelected = false;
        }
      }
    );
  }

  shipTypeSearch = (text$: Observable<string>) =>
    text$
      .debounceTime(50)
      .distinctUntilChanged()
      .do(() => {
        this.shipTypeSearchFailed = false;
      })
      .map(term => term.length < 1 ? []
        : this.shipTypeList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      )
      .do((text$) => {
        if (text$.length == 0) {
          this.shipTypeSearchFailed = true;
        }
      });

  formatter = (x: { name: string }) => x.name;

  // For autofilling data when testing gui:
  // autoFillData() {
  //   // this.selectShipType(this.shipTypeList[0]);
  //   this.selectHullType(this.hullTypeList[0]);
  //   this.selectBreadthType(this.breadthTypeList[0]);
  //   this.selectLengthType(this.lengthTypeList[0]);
  //   this.selectPowerType(this.powerTypeList[0]);
  //   this.shipModel.breadth = 1;
  //   this.shipModel.length = 2;
  //   this.shipModel.power = 3;
  //   this.shipModel.name = "test1234"
  //   this.shipModel.callSign = "1234";
  //   this.shipModel.imoNo = 1234;
  //   this.shipModel.mmsiNo = 1234;
  // }

  selectShipType($event: any) {
    this.shipModel.shipTypeId = $event.item.shipTypeId;
    this.shipTypeSelected = true;
  }

  deselectShipType() {
    this.shipModel.shipTypeId = null;
    this.selectedShipType = null;
    this.shipTypeSelected = false;
  }

  deselectOrganization() {
    this.shipModel.organizationId = null;
    this.organizationModel = null;
    this.organizationSelected = false;
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

  selectShipStatus(shipStatus: any) {
    this.shipModel.shipStatusId = shipStatus.shipStatusId;
    this.shipStatusDropdownString = shipStatus.name;
    this.shipStatusSelected = true;
  }

  registerShip() {
    this.shipService.registerShip(this.shipModel).subscribe(
      result => {
        this.shipModel.shipId = result.shipId;
        var shipContactList = this.selectedContactModels.map(contactModel => {
          var shipContact = new ShipContactModel();
          shipContact.shipId = this.shipModel.shipId;
          shipContact.contactMediumId = contactModel.contactMedium.contactMediumId;
          shipContact.contactValue = contactModel.contactValue;
          shipContact.isPreferred = contactModel.isPreferred;
          shipContact.comments = contactModel.comments;
          return shipContact;
        });
        this.saveShipContactList(shipContactList);
      }, error => {
        console.log(error);
        this.openConfirmationModal(ConfirmationModalComponent.TYPE_FAILURE, RESULT_FAILURE);
      }
    );
  }

  saveShipContactList(shipContactList: ShipContactModel[]) {
    this.shipService.saveShipContactList(shipContactList).subscribe(
      result => {
        if (result) {
          console.log(result);
          this.openConfirmationModal(ConfirmationModalComponent.TYPE_SUCCESS, RESULT_SUCCES);
        }
      }, error => {
        console.log(error);
        this.openConfirmationModal(ConfirmationModalComponent.TYPE_WARNING, RESULT_SAVED_WITHOUT_CONTACT);
      }
    );
  }

  private goBack() {
    this.contentService.setContent(CONTENT_NAMES.VIEW_SHIPS);
  }

  private openConfirmationModal(modalType: string, bodyText: string) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.modalType = modalType;
    modalRef.componentInstance.bodyText = bodyText;
    modalRef.result.then(
      result => {
        if (modalType != ConfirmationModalComponent.TYPE_FAILURE) this.goBack();
      },
      reason => {
        if (modalType != ConfirmationModalComponent.TYPE_FAILURE) this.goBack();
      }
    );
  }

}
