import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { NgbModal } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';

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
  }

  setCountryOfBirth($event) {
  }

  deselectNationality() {
  }

}
