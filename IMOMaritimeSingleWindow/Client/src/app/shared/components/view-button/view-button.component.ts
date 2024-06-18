import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConstantsService, ContentService } from 'app/shared/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-button',
  templateUrl: './view-button.component.html',
  styleUrls: ['./view-button.component.css']
})
export class ViewButtonComponent implements OnInit {

  @Input() rowData: any;
  @Output() view = new EventEmitter<any>();

  constructor(
  ) { }

  ngOnInit() {
  }

  viewItem() {
    this.view.emit(this.rowData);
  }
}
