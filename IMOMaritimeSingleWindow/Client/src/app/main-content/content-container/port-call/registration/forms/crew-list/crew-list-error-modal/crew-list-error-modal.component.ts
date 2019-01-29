import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenderModel, IdentityDocumentTypeModel, PersonOnBoardModel } from 'app/shared/models';
import { IdentityDocumentService, PortCallFalPersonOnBoardService } from 'app/shared/services';
import { PassengerModalComponent } from './../../passenger-list/passenger-modal/passenger-modal.component';
import { CrewMemberModalComponent } from './../crew-member-modal/crew-member-modal.component';

@Component({
  selector: 'app-crew-list-error-modal',
  templateUrl: './crew-list-error-modal.component.html',
  styleUrls: ['./crew-list-error-modal.component.css']
})
export class CrewListErrorModalComponent implements OnInit {
  inputPoBModel: any;
  identityDocumentTypes: IdentityDocumentTypeModel[] = [];
  genderList: GenderModel[] = [];


  @Output() rectifiedCrewEmitter: EventEmitter<PersonOnBoardModel[]> = new EventEmitter();
  @Output() deleteShipStoresEmitter: EventEmitter<boolean> = new EventEmitter();
  @Input() personOnBoardWithErrors: any[];
  rectifiedPoBs: PersonOnBoardModel[] = [];

  @ViewChild('infoModal') infoModal: any;
  @ViewChild(CrewMemberModalComponent) crewModalComponent: { openEditModal: (arg0: any) => void; };
  @ViewChild(PassengerModalComponent) paxModalComponent: { openEditModal: (arg0: any) => void; };
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

  openViewModal(PoBs: any[]) {
    if (!this.personOnBoardWithErrors || this.personOnBoardWithErrors.length < 0) {
      this.personOnBoardWithErrors = PoBs;
    }
    if (this.importErrorModels) {
      this.personOnBoardWithErrors = PoBs;
      this.importErrorModels = false;
    }

    this.modalService.open(this.infoModal);
  }

  openEditModal() {
    this.inputPoBModel = JSON.parse(JSON.stringify(this.personOnBoardWithErrors[0]));
    this.currentExcelRow = this.inputPoBModel.excelRowNum;

    this.currentErrors = this.inputPoBModel.errorMessages;
    if  (this.inputPoBModel.isPax) {
      this.paxModalComponent.openEditModal(this.inputPoBModel);
    } else {
      this.crewModalComponent.openEditModal(this.inputPoBModel);
    }
  }

  saveEntry() {
    const index = this.personOnBoardWithErrors.findIndex(ss => ss.sequenceNumber === this.inputPoBModel.sequenceNumber);
    this.personOnBoardWithErrors.splice(index, 1);
    this.rectifiedPoBs.push(this.inputPoBModel);
    if (this.personOnBoardWithErrors.length > 0) {
      this.openEditModal();
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

  editPoB($event) {
    let pob = JSON.parse(JSON.stringify($event));
    const index = this.personOnBoardWithErrors.findIndex(ss => ss.sequenceNumber === pob.sequenceNumber);
    this.personOnBoardWithErrors.splice(index, 1);
    pob = this.makeDates(pob);
    this.rectifiedPoBs.push(pob);

    if (this.personOnBoardWithErrors.length > 0) {
      this.openEditModal();
    } else {
      this.rectifiedCrewEmitter.emit(this.rectifiedPoBs);
    }
  }

  finishRectifying() {
    this.rectifiedPoBs.push(this.inputPoBModel);
    this.rectifiedCrewEmitter.emit(this.rectifiedPoBs);
  }

  deleteEntry() {
    const index = this.personOnBoardWithErrors.findIndex(ss => ss.sequenceNumber === this.inputPoBModel.sequenceNumber);
    this.personOnBoardWithErrors.splice(index, 1);

    if (this.personOnBoardWithErrors.length > 0) {
      this.openEditModal();
    } else {
      this.rectifiedCrewEmitter.emit(this.rectifiedPoBs);
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
