import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActionButtonsComponent } from 'app/shared/components/action-buttons/action-buttons.component';
import { IdentityDocumentComponent } from 'app/shared/components/identity-document/identity-document.component';
import { PERSON_ON_BOARD_TYPES } from 'app/shared/constants/enumValues';
import { GenderModel, IdentityDocumentModel, LocationModel, PersonOnBoardModel, PersonOnBoardTypeModel } from 'app/shared/models/';
import { FileService, PortCallFalPersonOnBoardService } from 'app/shared/services/';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs/Subscription';
import { SmartTableModel } from '../passenger-list/smartTableModel';
import { CrewListErrorModalComponent } from './crew-list-error-modal/crew-list-error-modal.component';
import { CrewMemberModalComponent } from './crew-member-modal/crew-member-modal.component';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit, OnDestroy {

  @Input() portCallId: number;
  @Input() crewList: any[] = [];

  portCallCrewModel: PersonOnBoardModel = new PersonOnBoardModel();

  genderList: GenderModel[];
  selectedGender: GenderModel;
  identityDocTypeList: IdentityDocumentModel[];
  identityDocumentModel: IdentityDocumentModel = new IdentityDocumentModel();
  personOnBoardType: PersonOnBoardTypeModel;


  modalModel: PersonOnBoardModel = new PersonOnBoardModel();
  listIsPristine = true;

  @ViewChild(CrewMemberModalComponent) crewMemberModalComponent;
  @ViewChild(IdentityDocumentComponent) identityDocumentComponent;
  @ViewChild('dateOfBirth') dateOfBirthComponent;
  @ViewChild(CrewListErrorModalComponent) crewListErrorModalComponent: any;


  @ViewChild(NgForm) form: NgForm;

  booleanList: string[] = ['Yes', 'No'];
  booleanModel = {
    'Yes': true,
    'No': false
  };
  inTransit: boolean = null;

  formValid = true;
  validDocumentDates = true;
  issueDateRequiredError = false;
  expiryDateRequiredError = false;

  crewListDataSource: LocalDataSource = new LocalDataSource();
  smartTableList = [];

  tableSettings = {
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    editor: {
      config: {
        completer: {
          descriptionField: 'Search here'
        }
      }
    },
    noDataMessage: 'There are no crew members in this list.',
    columns: {
      sequenceNumber: {
        title: 'ID'
      },
      familyName: {
        title: 'Family Name',
      },
      givenName: {
        title: 'Given Name'
      },
      nationality: {
        title: 'Nationality'
      },
      gender: {
        title: 'Gender'
      },
      dateOfBirth: {
        title: 'Date of Birth'
      },
      rankName: {
        title: 'Rank/rating'
      },
      delete: {
        title: 'Actions',
        // deleteButtonContent: 'Delete',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: ActionButtonsComponent,
        onComponentInitFunction: (instance) => {
          instance.view.subscribe(row => {
            this.openViewCrewMemberModal(row);
          });
          instance.edit.subscribe(row => {
            this.openEditCrewMemberModal(row);
          });
          instance.delete.subscribe(row => {
            this.deleteCrewMember(row);
          });
        }
      },
    }
  };

  genderListSubscription: Subscription;
  personOnBoardTypeSubscription: Subscription;
  pristineSubscription: Subscription;

  constructor(
    public personOnBoardService: PortCallFalPersonOnBoardService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.personOnBoardService.crewDataIsPristine$.subscribe(res => {
      if (!res) {
        this.personOnBoardService.crewList$.subscribe(crewList => {
          this.crewList = crewList;
        });
      }
    });

    if (this.crewList) {
      this.crewList.forEach(crewMember => {
        crewMember = this.makeDates(crewMember);
      });
      this.updateSequenceNumbers();
    }
    // Load in crew list in smart table
    this.crewListDataSource.load(this.generateSmartTable());

  // Initiate models
  this.portCallCrewModel = new PersonOnBoardModel();
  this.identityDocumentModel = new IdentityDocumentModel();

  // Get gender list
  if (!this.genderList) {
    this.genderListSubscription = this.personOnBoardService.getGenderList().subscribe(
      results => {
        this.genderList = results;
    });
  }

  this.personOnBoardTypeSubscription = this.personOnBoardService.getPersonOnBoardTypeByEnum(PERSON_ON_BOARD_TYPES.CREW).subscribe(
    personOnBoardType => {
      this.personOnBoardType = personOnBoardType;
  });

    // Set in service
    this.personOnBoardService.setCrewList(this.crewList);

    this.pristineSubscription = this.personOnBoardService.crewDataIsPristine$.subscribe(
      isPristine => {
        this.listIsPristine = isPristine;
    });
  }

  ngOnDestroy()  {
    this.genderListSubscription.unsubscribe();
    this.personOnBoardTypeSubscription.unsubscribe();
    this.pristineSubscription.unsubscribe();
  }

  excelFileSaved(saved: any) {
    this.personOnBoardService.getCrewListByPortCallId(this.portCallId)
      .finally(() => {
        this.persistData();
        this.listIsPristine = true;
        this.personOnBoardService.setCrewDataIsPristine(true);
      })
      .subscribe(res => {
        this.crewList = res;
      });
    if (saved) {
      this.personOnBoardService.getPassengerListByPortCallId(this.portCallId)
      .subscribe(pax => {
        this.personOnBoardService.setPassengersList(pax);
      });
    }
  }

  uploadError(entriesWithErrors: any[]) {
    this.crewListErrorModalComponent.openViewModal(entriesWithErrors);
  }

  addRectifiedCrewAndPax($event) {
    let paxList = $event.filter((x: { isPax: any; }) => x.isPax);
    const crewList = $event.filter((x: { isPax: any; }) => !x.isPax);
    if ($event != null && $event !== undefined) {
      this.crewList = this.crewList.concat(crewList);
      this.persistData();

      this.personOnBoardService.getPassengerListByPortCallId(this.portCallId)
      .finally(() => {
        this.personOnBoardService.setPassengersList(paxList);
        this.personOnBoardService.setPassengerDataIsPristine(false);
      })
      .subscribe(res => {
        paxList = paxList.concat(res);
      });
    }
  }

  addCrewMember() {
    // Modify
    this.portCallCrewModel.portCallId = this.portCallId;
    this.portCallCrewModel.personOnBoardType = this.personOnBoardType;
    this.portCallCrewModel.personOnBoardTypeId = this.personOnBoardType.personOnBoardTypeId;

    // Add the identityDocumentModel to crewModel
    this.portCallCrewModel.identityDocument.push(this.identityDocumentModel);

    // Add
    this.crewList.push(this.portCallCrewModel);
    this.persistData();

    // Reset
    this.clearForm();
  }

  generateSmartTable(): any[] {
    const newList = [];
    if (this.crewList) {
      this.crewList.forEach(crewMember => {
        const modifiedPassenger = new SmartTableModel();

        crewMember.personOnBoardId ? modifiedPassenger.personOnBoardId = crewMember.personOnBoardId : modifiedPassenger.personOnBoardId = null;
        modifiedPassenger.sequenceNumber = crewMember.sequenceNumber;
        modifiedPassenger.givenName = crewMember.givenName;
        modifiedPassenger.familyName = crewMember.familyName;
        modifiedPassenger.rankName = crewMember.rankName;
        crewMember.dateOfBirth ? modifiedPassenger.dateOfBirth = this.getDisplayDateFormat(crewMember.dateOfBirth) : modifiedPassenger.dateOfBirth = null;
        crewMember.nationality ? modifiedPassenger.nationality = crewMember.nationality : modifiedPassenger.nationality = null;
        crewMember.gender ? modifiedPassenger.gender = crewMember.gender : modifiedPassenger.gender = null;
        modifiedPassenger.countryOfBirthTwoCharCode = crewMember.nationalityTwoCharCode;
        modifiedPassenger.nationalityTwoCharCode = crewMember.nationalityTwoCharCode;

        newList.push(modifiedPassenger);
      });
    }
    return newList;
  }

  persistData() {
    this.updateSequenceNumbers();
    this.personOnBoardService.setCrewList(this.crewList);
    this.touchData();
    this.reloadTable();
  }

  touchData() {
    this.listIsPristine = false;
    this.personOnBoardService.setCrewDataIsPristine(false);
  }

  clearForm() {
    this.portCallCrewModel = new PersonOnBoardModel();
    this.identityDocumentModel = new IdentityDocumentModel();
    this.resetDateOfBirth();
    this.identityDocumentComponent.resetForm();
  }

  reloadTable() {
    const rows = this.generateSmartTable();
    this.crewListDataSource.load(rows);
  }

  makeLocationModel($event) {
    const tempLocationModel = Object.assign(new LocationModel(), $event);
    return tempLocationModel;
  }

  // Setters
  setIdentityDocumentModel($event) {
    this.identityDocumentModel = $event.identityDocumentModel;
    this.validDocumentDates = $event.validDocumentDates.issueDateAfterExpiryDateError
    || $event.validDocumentDates.expiryDateBeforeExpiryDateError ? false : true;

    this.issueDateRequiredError = $event.validDocumentDates.issueDateRequiredError;
    this.expiryDateRequiredError = $event.validDocumentDates.expiryDateRequiredError;

    this.validDocumentDates = this.validDocumentDates && this.issueDateRequiredError && this.expiryDateRequiredError;
  }

  setDateOfBirth($event) {
    if ($event) {
      const date: Date = new Date($event.year, $event.month -  1, $event.day);
      this.portCallCrewModel.dateOfBirth = date;
    } else {
      this.portCallCrewModel.dateOfBirth = null;
    }
  }

  setGender($event) {
    this.portCallCrewModel.gender = $event;
    this.portCallCrewModel.genderId = $event.genderId;
  }

  setCountryOfBirth($event) {
    this.portCallCrewModel.countryOfBirth = $event.item;
    this.portCallCrewModel.countryOfBirthId = $event.item.countryId;
  }

  setNationality($event) {
    this.portCallCrewModel.nationality = $event.item;
    this.portCallCrewModel.nationalityId = $event.item.countryId;
  }

  setTransit($event) {
    this.inTransit = $event;
    Object.keys(this.booleanModel).forEach(key => {
      if (key === $event) {
        this.portCallCrewModel.inTransit = this.booleanModel[key];
        return;
      }
    });
  }

  // Resetters

  resetNationality() {
    this.portCallCrewModel.nationality = null;
    this.portCallCrewModel.nationalityId = null;
  }

  resetCountryOfBirth() {
    this.portCallCrewModel.countryOfBirth = null;
    this.portCallCrewModel.countryOfBirthId = null;
  }

  resetIssuingNation() {
    this.identityDocumentModel.issuingNation = null;
    this.identityDocumentModel.issuingNationId = null;
  }

  resetDateOfBirth() {
    this.portCallCrewModel.dateOfBirth = null;
    this.dateOfBirthComponent.dateChanged(null);
  }

  makeDates(crewMember: PersonOnBoardModel) {
    crewMember.dateOfBirth = crewMember.dateOfBirth != null ? new Date(crewMember.dateOfBirth) : null;
        crewMember.identityDocument.forEach(identityDocument => {
          identityDocument.identityDocumentIssueDate = identityDocument.identityDocumentIssueDate != null ? new Date(identityDocument.identityDocumentIssueDate) : null;
          identityDocument.identityDocumentExpiryDate = identityDocument.identityDocumentExpiryDate != null ? new Date(identityDocument.identityDocumentExpiryDate) : null;
        });
    return crewMember;
  }

  openViewCrewMemberModal(row) {
    this.crewList.forEach(crewMember => {
      if (crewMember.sequenceNumber === row.sequenceNumber) {
        this.crewMemberModalComponent.openViewModal(crewMember);
        return;
      }
    });
  }

  openEditCrewMemberModal(row) {
    this.crewList.forEach(crewMember => {
      if (crewMember.sequenceNumber === row.sequenceNumber) {
        this.crewMemberModalComponent.openEditModal(crewMember);
        return;
      }
    });
  }

  editCrewMember($event) {
    // Set corresponding crewMember to the edited instance
    this.crewList[this.crewList.findIndex(c => c.sequenceNumber === $event.sequenceNumber)] = JSON.parse(JSON.stringify($event));
    this.personOnBoardService.setCrewList(this.crewList);
    // Make all dates Date objects again
    this.crewList.forEach(crewMember => { crewMember = this.makeDates(crewMember); });
    // Load to smart table
    this.reloadTable();
    this.touchData();
  }

  deleteCrewMember(row) {
    if (this.crewList.length <= 1) {
      this.crewList = [];
    } else {
      this.crewList.forEach((item, index) => {
        if (item.sequenceNumber === row.sequenceNumber) {
          this.crewList.splice(index, 1);
        }
      });
    }
    this.persistData();
  }

  deleteAllCrewMembers() {
    this.crewList = [];
    this.persistData();
  }

  saveCrewList() {
    this.personOnBoardService.updatePersonOnBoardList(this.portCallId, this.crewList, this.personOnBoardType.personOnBoardTypeId).subscribe(res => {
      this.listIsPristine = true;
      this.personOnBoardService.setCrewDataIsPristine(true);
    });
  }

  importSuccess($event) {
    if ($event) {
      this.crewListErrorModalComponent.openSuccessModal();
    } else {
      this.crewListErrorModalComponent.openErrorModal();
    }
  }


  // Helper methods

  updateSequenceNumbers() {
    let tempSequenceNumber = 1;
    this.crewList.forEach(crewMember => {
      crewMember.sequenceNumber = tempSequenceNumber;
      tempSequenceNumber++;
    });
  }

  getDateFormatFromNgb(date) {
    return new Date(date.year, date.month, date.day);
  }

  getDisplayDateFormat(date) {
    if (date) {
      date = new Date(date);
      const dateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
      return dateString;
    } else {
      return null;
    }
  }

  getNgbDateFormat(date) {
    const newDate = new Date(date);
    return {
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      day: newDate.getDate()
    };
  }

  openWarningModal(content: any) {
    this.modalService.open(content);
  }


}
