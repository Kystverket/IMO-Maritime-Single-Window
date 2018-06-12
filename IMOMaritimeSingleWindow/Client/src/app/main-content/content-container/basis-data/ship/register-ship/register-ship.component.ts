import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ContactModel } from 'app/shared/models/contact-model';
import { ShipContactModel } from 'app/shared/models/ship-contact-model';
import { ShipModel } from 'app/shared/models/ship-model';
import { ContactService } from 'app/shared/services/contact.service';
import { ContentService } from 'app/shared/services/content.service';
import { OrganizationService } from 'app/shared/services/organization.service';
import { ShipService } from 'app/shared/services/ship.service';

const RESULT_SUCCES = 'Ship was successfully saved to the database.';
const RESULT_FAILURE =
  'There was a problem when trying to save the ship to the database. Please try again later.';
const RESULT_SAVED_WITHOUT_CONTACT =
  'Ship was saved to the database, but there was an error when trying to save the ship\'s ' +
  'contact information. Please provide this information later.';

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
  shipTypeSelected = false;
  shipTypeSearchFailed = false;

  hullTypeDropdownString = 'Select hull type';
  lengthTypeDropdownString = 'Select type';
  breadthTypeDropdownString = 'Select type';
  powerTypeDropdownString = 'Select type';
  shipStatusDropdownString = 'Select status';

  shipFlagCodeModel: any;
  organizationModel: any;
  selectedContactModels: ContactModel[];

  shipFlagCodeSelected: boolean;
  organizationSelected: boolean;
  contactSelected: boolean;

  // shipModel should be private, but Angular's AoT compilation can't handle it. Will be fixed in Angular 6.0
  constructor(
    public shipModel: ShipModel,
    private shipService: ShipService,
    private contactService: ContactService,
    private contentService: ContentService,
    private modalService: NgbModal,
    private organizationService: OrganizationService
  ) {}

  ngOnInit() {
    this.shipService
      .getShipTypes()
      .subscribe(data => (this.shipTypeList = data));
    this.shipService
      .getHullTypes()
      .subscribe(data => (this.hullTypeList = data));
    this.shipService
      .getLengthTypes()
      .subscribe(data => (this.lengthTypeList = data));
    this.shipService
      .getBreadthTypes()
      .subscribe(data => (this.breadthTypeList = data));
    this.shipService
      .getPowerTypes()
      .subscribe(data => (this.powerTypeList = data));
    this.shipService
      .getShipStatusList()
      .subscribe(data => (this.shipStatusList = data));

    this.shipService.shipFlagCodeData$.subscribe(data => {
      if (data) {
        this.shipFlagCodeModel = data;
        this.shipModel.shipFlagCodeId = data.shipFlagCodeId;
        this.shipFlagCodeSelected = true;
      } else {
        this.shipFlagCodeSelected = false;
      }
    });

    this.organizationService.setOrganizationData(null);
    this.organizationService.organizationData$.subscribe(data => {
      if (data) {
        this.organizationModel = data;
        this.shipModel.organizationId = data.organizationId;
        this.organizationSelected = true;
      } else {
        this.organizationSelected = false;
      }
    });

    this.contactService.wipeServiceData();
    this.contactService.contactData$.subscribe(data => {
      if (data && data.length !== 0) {
        this.selectedContactModels = data;
        this.contactSelected = true;
      } else {
        this.contactSelected = false;
      }
    });
  }

  shipTypeSearch = (text$: Observable<string>) =>
    text$
      .debounceTime(50)
      .distinctUntilChanged()
      .do(() => {
        this.shipTypeSearchFailed = false;
      })
      .map(
        term =>
          term.length < 1
            ? []
            : this.shipTypeList
                .filter(
                  v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1
                )
                .slice(0, 10)
      )
      .do(result => {
        if (result.length === 0) {
          this.shipTypeSearchFailed = true;
        }
      })

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
        const shipContactList = this.selectedContactModels.map(contactModel => {
          const shipContact = new ShipContactModel();
          shipContact.shipId = this.shipModel.shipId;
          shipContact.contactMediumId =
            contactModel.contactMedium.contactMediumId;
          shipContact.contactValue = contactModel.contactValue;
          shipContact.isPreferred = contactModel.isPreferred;
          shipContact.comments = contactModel.comments;
          return shipContact;
        });
        this.saveShipContactList(shipContactList);
      },
      error => {
        console.log(error);
        this.openConfirmationModal(
          ConfirmationModalComponent.TYPE_FAILURE,
          RESULT_FAILURE
        );
      }
    );
  }

  saveShipContactList(shipContactList: ShipContactModel[]) {
    this.shipService.saveShipContactList(shipContactList).subscribe(
      result => {
        if (result) {
          this.openConfirmationModal(
            ConfirmationModalComponent.TYPE_SUCCESS,
            RESULT_SUCCES
          );
        }
      },
      error => {
        console.log(error);
        this.openConfirmationModal(
          ConfirmationModalComponent.TYPE_WARNING,
          RESULT_SAVED_WITHOUT_CONTACT
        );
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
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) {
          this.goBack();
        }
      },
      reason => {
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) {
          this.goBack();
        }
      }
    );
  }
}
