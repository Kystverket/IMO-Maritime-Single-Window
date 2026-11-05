import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: false,
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  static TYPE_SUCCESS = 'SUCCESS';
  static TYPE_WARNING = 'WARNING';
  static TYPE_FAILURE = 'FAILURE';

  static CONFIRM_MODAL = 'CONFIRM_MODAL';
  static ALERT_MODAL = 'ALERT_MODAL';

  @Input() headerText: string;

  @Input() bodyText: string;

  @Input() modalType: string;

  @Input() modalStyle: string;


  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.headerText = this.modalType;
  }
}
