import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewChildren } from '@angular/core';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { NgbModal } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { LoginAuthGuard } from '../../../../../../../auth/guards/login-auth.guard';

@Component({
  selector: 'app-passenger-modal',
  templateUrl: './passenger-modal.component.html',
  styleUrls: ['./passenger-modal.component.css']
})
export class PassengerModalComponent implements OnInit {

  inputPassengerModel: PersonOnBoardModel;

  @Output() outputPassengerModel: EventEmitter<PersonOnBoardModel> = new EventEmitter();

  @ViewChild('viewModal') viewModal;
  @ViewChild('editModal') editModal;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.inputPassengerModel = new PersonOnBoardModel();
  }

  // Open modals

  openViewModal(passengerModel: PersonOnBoardModel) {
    this.setInputPassengerModel(passengerModel);
    this.modalService.open(this.viewModal);
  }

  openEditModal(passengerModel: PersonOnBoardModel) {
    this.setInputPassengerModel(passengerModel);
    this.modalService.open(this.editModal);
  }

  // Output

  editPassenger() {
    this.outputPassengerModel.emit(this.inputPassengerModel);
  }

  // Setters

  setInputPassengerModel(passengerModel: PersonOnBoardModel) {
    this.inputPassengerModel = passengerModel;
    console.log(passengerModel);
    console.log(this.inputPassengerModel);
  }

  resetInputPassengerModel() {
    this.inputPassengerModel = new PersonOnBoardModel();
    console.log(this.inputPassengerModel);
  }

  setNationality($event) {
    console.log($event);
    this.inputPassengerModel.nationality = $event.item;
    this.inputPassengerModel.nationalityId = $event.item.countryId;
  }

  setCountryOfBirth($event) {
    console.log($event);
    this.inputPassengerModel.countryOfBirth = $event.item;
    this.inputPassengerModel.countryOfBirthId = $event.item.countryId;
  }

  setIssuingNation($event) {
    console.log($event);
    this.inputPassengerModel.identityDocument[0].issuingNation = $event.item;
    this.inputPassengerModel.identityDocument[0].issuingNationId = $event.item.countryId;
    console.log(this.inputPassengerModel);
  }

  deselectNationality() {
    this.inputPassengerModel.nationality = null;
    this.inputPassengerModel.nationalityId = null;
  }

  deselectCountryOfBirth() {
    this.inputPassengerModel.countryOfBirth = null;
    this.inputPassengerModel.countryOfBirthId = null;
  }

  deselectIssuingNation() {
    this.inputPassengerModel.identityDocument[0].issuingNation = null;
    this.inputPassengerModel.identityDocument[0].issuingNationId = null;
  }
}
