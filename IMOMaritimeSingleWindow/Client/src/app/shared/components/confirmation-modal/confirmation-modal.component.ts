import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  static TYPE_SUCCESS: string = "SUCCESS";
  static TYPE_WARNING: string = "WARNING";
  static TYPE_FAILURE: string = "FAILURE";

  @Input()
  headerText: string;

  @Input()
  bodyText: string;

  @Input()
  modalType: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.headerText = this.modalType;
  }

}
