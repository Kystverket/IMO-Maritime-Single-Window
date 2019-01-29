import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenderModel, IdentityDocumentTypeModel } from 'app/shared/models';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { IdentityDocumentService } from 'app/shared/services';
import { PassengerModalComponent } from '../passenger-modal/passenger-modal.component';
import { PortCallFalPersonOnBoardService } from './../../../../../../../shared/services/port-call-fal-person-on-board.service';
import { CrewMemberModalComponent } from './../../crew-list/crew-member-modal/crew-member-modal.component';

@Component({
  selector: 'app-passenger-list-error-modal',
  templateUrl: './passenger-list-error-modal.component.html',
  styleUrls: ['./passenger-list-error-modal.component.css']
})
export class PassengerListErrorModalComponent implements OnInit {

  inputPoBModel: any;
  lastPaxWithError = false;
  identityDocumentTypes: IdentityDocumentTypeModel[] = [];
  genderList: GenderModel[] = [];


  @Output() rectifiedPaxEmitter: EventEmitter<PersonOnBoardModel[]> = new EventEmitter();
  @Output() deleteShipStoresEmitter: EventEmitter<boolean> = new EventEmitter();
  @Input() personOnBoardWithErrors: any[];
  rectifiedPoBs: PersonOnBoardModel[] = [];

  @ViewChild('infoModal') infoModal: any;
  @ViewChild(PassengerModalComponent) paxModalComponent;
  @ViewChild(CrewMemberModalComponent) crewModalComponent;
  @ViewChild('successModal') successModal: any;
  @ViewChild('errorModal') errorModal: any;

  @ViewChild(NgForm)
  form: NgForm;
  currentExcelRow: number;
  currentErrors: any[];

  dirtyForm = false;
  importErrorModels = true;

  constructor(
    private modalService: NgbModal,
    private personOnBoardService: PortCallFalPersonOnBoardService,
    private identityDocumentService: IdentityDocumentService,
  ) { }

  ngOnInit() {
    this.personOnBoardWithErrors = [];

    this.identityDocumentService.getIdentityDocumentTypes().subscribe(res => {
      this.identityDocumentTypes = res;
    });

    this.personOnBoardService.getGenderList().subscribe(res => {
      this.genderList = res;
    });
  }

  openViewModal(pax: any[]) {
    if (!this.personOnBoardWithErrors || this.personOnBoardWithErrors.length < 0) {
      this.personOnBoardWithErrors = pax;
    }
    if (this.importErrorModels) {
      this.personOnBoardWithErrors = pax;
      this.importErrorModels = false;
    }

    this.modalService.open(this.infoModal);
  }

  openEditModal() {
    if (this.personOnBoardWithErrors.length === 1) {
      this.lastPaxWithError = true;
    }
    // Deep copy to avoid 2-way-binding issues affecting the original list when resetting the form
    this.inputPoBModel = JSON.parse(JSON.stringify(this.personOnBoardWithErrors[0]));
    this.currentExcelRow = this.inputPoBModel.excelRowNum;

    this.currentErrors = this.inputPoBModel.errorMessages;
    if  (this.inputPoBModel.isPax) {
      this.paxModalComponent.openEditModal(this.inputPoBModel);
    } else {
      this.crewModalComponent.openEditModal(this.inputPoBModel);
    }
  }

  openSuccessModal() {
    this.modalService.open(this.successModal, {
      backdrop: 'static'
    });
  }

  openErrorModal() {
    this.modalService.open(this.errorModal, {
      backdrop: 'static'
    });
  }

  saveEntry() {
    const index = this.personOnBoardWithErrors.findIndex(ss => ss.sequenceNumber === this.inputPoBModel.sequenceNumber);
    this.personOnBoardWithErrors.splice(index, 1);
    this.rectifiedPoBs.push(this.inputPoBModel);
    if (this.personOnBoardWithErrors.length > 0) {
      this.openEditModal();
    }
  }

  editPoB($event) {
    let pob = JSON.parse(JSON.stringify($event));
    const index = this.personOnBoardWithErrors.findIndex(ss => ss.sequenceNumber === pob.sequenceNumber);
    this.personOnBoardWithErrors.splice(index, 1);
    pob = this.makeDates(pob);
    this.rectifiedPoBs.push(pob);

    this.continueOrEmit();
  }

  finishRectifying() {
    this.rectifiedPoBs.push(this.inputPoBModel);
    this.rectifiedPaxEmitter.emit(this.rectifiedPoBs);
  }

  deleteEntry() {
    const index = this.personOnBoardWithErrors.findIndex(ss => ss.sequenceNumber === this.inputPoBModel.sequenceNumber);
    this.personOnBoardWithErrors.splice(index, 1);
    this.continueOrEmit();
  }

  continueOrEmit() {
    if (this.personOnBoardWithErrors.length > 0) {
      this.openEditModal();
    } else {
      this.rectifiedPaxEmitter.emit(this.rectifiedPoBs);
    }
  }

  makeDates(pob: PersonOnBoardModel) {
    pob.dateOfBirth = pob.dateOfBirth != null ? new Date(pob.dateOfBirth) : null;
    pob.identityDocument.forEach(identityDocument => {
      identityDocument.identityDocumentIssueDate = identityDocument.identityDocumentIssueDate != null ? new Date(identityDocument.identityDocumentIssueDate) : null;
      identityDocument.identityDocumentExpiryDate = identityDocument.identityDocumentExpiryDate != null ? new Date(identityDocument.identityDocumentExpiryDate) : null;
    });
    return pob;
  }
}
