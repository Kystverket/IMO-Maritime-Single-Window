import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { ConstantsService, ContentService } from 'app/shared/services';
import { Subscription } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-view-button',
  templateUrl: './view-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
