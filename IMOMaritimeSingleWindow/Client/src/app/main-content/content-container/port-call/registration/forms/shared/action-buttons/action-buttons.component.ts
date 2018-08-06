import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { FORM_NAMES } from 'app/shared/constants/form-names';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent implements OnInit, OnDestroy, ViewCell {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() view: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  selectedForm: string;
  formNames: any;

  model: PersonOnBoardModel;
  portCallId: number;

  passengerList: PersonOnBoardModel[] = [];

  constructor(
    private modalService: NgbModal,
    private passengerService: PortCallPassengerListService,
    private portCallService: PortCallService
  ) { }

  ngOnInit() {
    this.formNames = FORM_NAMES;

    this.portCallService.detailsIdentificationData$.subscribe(results => {
      if (results) {
        this.portCallId = results.portCallId;
      }
    });

    this.passengerService.passengerList$.subscribe(list => {
      if (list) {
        this.passengerList = list;
      }
    });
  }

  ngOnDestroy() {
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  onViewClick() {
    // this.passengerService.getPassengerByPortCallId(this.portCallId, this.rowData.)
    this.view.emit(this.rowData);
  }

  onEditClick() {
    this.edit.emit(this.rowData);
  }

  onDeleteClick() {
    this.delete.emit(this.rowData);
    // this.passengerService.deletePassengerEntry(this.rowData);
  }

  editPassenger() {
    this.passengerService.editPassenger(this.model);
  }

  setNationality($event) {
    this.model.nationality = $event;
  }

  deselectNationality($event) {
    this.model.nationality = null;
  }

  setCountryOfBirth($event) {
    this.model.countryOfBirth = $event;
  }

}
