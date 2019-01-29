import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenderModel, IdentityDocumentTypeModel } from 'app/shared/models';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { IdentityDocumentService } from 'app/shared/services';
import { PassengerModalComponent } from '../passenger-modal/passenger-modal.component';
import { PortCallFalPersonOnBoardService } from './../../../../../../../shared/services/port-call-fal-person-on-board.service';

@Component({
  selector: 'app-passenger-list-error-modal',
  templateUrl: './passenger-list-error-modal.component.html',
  styleUrls: ['./passenger-list-error-modal.component.css']
})
export class PassengerListErrorModalComponent implements OnInit {

  inputPaxModel: any;
  lastPaxWithError = false;
  identityDocumentTypes: IdentityDocumentTypeModel[] = [];
  genderList: GenderModel[] = [];


  @Output() rectifiedPaxEmitter: EventEmitter<PersonOnBoardModel[]> = new EventEmitter();
  @Output() deleteShipStoresEmitter: EventEmitter<boolean> = new EventEmitter();
  @Input() personOnBoardWithErrors: any[];
  rectifiedPax: PersonOnBoardModel[] = [];
  rectifiedPoBs: PersonOnBoardModel[] = [];

  @ViewChild('infoModal') infoModal: any;
  @ViewChild(PassengerModalComponent) passengerModalComponent;
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
    this.inputPaxModel = JSON.parse(JSON.stringify(this.personOnBoardWithErrors[0]));
    this.currentExcelRow = this.inputPaxModel.excelRowNum;

    this.currentErrors = this.inputPaxModel.errorMessages;
    this.passengerModalComponent.openEditModal(this.inputPaxModel);

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
    const index = this.personOnBoardWithErrors.findIndex(ss => ss.sequenceNumber === this.inputPaxModel.sequenceNumber);
    this.personOnBoardWithErrors.splice(index, 1);
    this.rectifiedPax.push(this.inputPaxModel);
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

    if (this.personOnBoardWithErrors.length > 0) {
      this.openEditModal();
    } else {
      this.rectifiedPaxEmitter.emit(this.rectifiedPoBs);
    }
  }

  finishRectifying() {
    this.rectifiedPax.push(this.inputPaxModel);
    this.rectifiedPaxEmitter.emit(this.rectifiedPax);
  }

  deleteEntry() {
    const index = this.personOnBoardWithErrors.findIndex(ss => ss.sequenceNumber === this.inputPaxModel.sequenceNumber);
    this.personOnBoardWithErrors.splice(index, 1);

    if (this.personOnBoardWithErrors.length > 0) {
      this.openEditModal();
    } else {
      this.rectifiedPaxEmitter.emit(this.rectifiedPax);
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
