import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';
import { NgForm } from '@angular/forms';
import { IdentityDocumentComponent } from 'app/shared/components/identity-document/identity-document.component';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { PersonOnBoardTypeModel } from 'app/shared/models/person-on-board-type-model';
import { IdentityDocumentModel } from 'app/shared/models/identity-document-model';
import { GenderModel } from 'app/shared/models/gender-model';
import { LocalDataSource } from 'ng2-smart-table';
import { ActionButtonsComponent } from 'app/shared/components/action-buttons/action-buttons.component';
import { Subscription } from 'rxjs/Subscription';
import { LocationModel } from 'app/shared/models/location-model';
import { SmartTableModel } from '../passenger-list/smartTableModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrewMemberModalComponent } from './crew-member-modal/crew-member-modal.component';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit, OnDestroy {

  @Input() portCallId: number;
  @Input() crewList: PersonOnBoardModel[] = [];

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

  @ViewChild(NgForm) form: NgForm;

  booleanList: string[] = ['Yes', 'No'];
  booleanModel = {
    'Yes': true,
    'No': false
  };
  inTransit: boolean = null;

  formValid = true;
  validDocumentDates = true;

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
    private personOnBoardService: PortCallFalPersonOnBoardService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {

    if (this.crewList) {
      this.crewList.forEach(crewMember => {
        crewMember = this.makeDates(crewMember);
      });
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

  // Get crew person on board type (id 1)
  this.personOnBoardTypeSubscription = this.personOnBoardService.getPersonOnBoardType(1).subscribe(
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
        crewMember.portOfEmbarkation ? modifiedPassenger.portOfEmbarkation = crewMember.portOfEmbarkation.name : modifiedPassenger.portOfEmbarkation = null;
        crewMember.portOfDisembarkation ? modifiedPassenger.portOfDisembarkation = crewMember.portOfDisembarkation.name : modifiedPassenger.portOfDisembarkation = null;
        crewMember.nationality ? modifiedPassenger.nationality = crewMember.nationality.name : modifiedPassenger.nationality = null;
        crewMember.gender ? modifiedPassenger.gender = crewMember.gender.description : modifiedPassenger.gender = null;

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
    this.validDocumentDates = $event.validDocumentDates.issueDateAfterExpiryDateError || $event.validDocumentDates.expiryDateBeforeExpiryDateError ? false : true;
  }

  setPortOfEmbarkation($event) {
    this.portCallCrewModel.portOfEmbarkation = this.makeLocationModel($event);
    this.portCallCrewModel.portOfEmbarkationId = $event.locationId;
  }

  setPortOfDisembarkation($event) {
    this.portCallCrewModel.portOfDisembarkation = this.makeLocationModel($event);
    this.portCallCrewModel.portOfDisembarkationId = $event.locationId;
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
  resetPortOfDisembarkation() {
    this.portCallCrewModel.portOfDisembarkation = null;
    this.portCallCrewModel.portOfDisembarkationId = null;
  }

  resetPortOfEmbarkation() {
    this.portCallCrewModel.portOfEmbarkation = null;
    this.portCallCrewModel.portOfEmbarkationId = null;
  }

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
      console.log('Saved crew members.');
    });
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
