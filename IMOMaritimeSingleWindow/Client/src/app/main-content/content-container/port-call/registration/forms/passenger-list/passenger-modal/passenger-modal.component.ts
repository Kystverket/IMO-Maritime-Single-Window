import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ViewChildren } from '@angular/core';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { NgbModal } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { SearchCountryComponent } from 'app/shared/components/search-country/search-country.component';

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

  setInputPassengerModel(passengerModel: PersonOnBoardModel) {
    console.log(passengerModel);
    this.inputPassengerModel = passengerModel;
  }

  openViewModal(passengerModel: PersonOnBoardModel) {
    this.setInputPassengerModel(passengerModel);
    this.modalService.open(this.viewModal);
  }

  openEditModal(passengerModel: PersonOnBoardModel) {
    this.setInputPassengerModel(passengerModel);
    this.modalService.open(this.editModal);
  }

  editPassenger() {
    this.outputPassengerModel.emit(this.inputPassengerModel);
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
