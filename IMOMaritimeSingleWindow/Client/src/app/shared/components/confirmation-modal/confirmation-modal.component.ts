import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  static TYPE_SUCCESS = 'SUCCESS';
  static TYPE_WARNING = 'WARNING';
  static TYPE_FAILURE = 'FAILURE';

  @Input() headerText: string;

  @Input() bodyText: string;

  @Input() modalType: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.headerText = this.modalType;
  }
}
