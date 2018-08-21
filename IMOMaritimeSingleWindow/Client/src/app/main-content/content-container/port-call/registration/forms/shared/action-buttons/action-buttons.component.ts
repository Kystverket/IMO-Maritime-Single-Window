import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { FORM_NAMES } from 'app/shared/constants/form-names';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.formNames = FORM_NAMES;
  }

  ngOnDestroy() {
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  onViewClick() {
    this.view.emit(this.rowData);
  }

  onEditClick() {
    this.edit.emit(this.rowData);
  }

  onDeleteClick() {
    this.delete.emit(this.rowData);
  }

}
