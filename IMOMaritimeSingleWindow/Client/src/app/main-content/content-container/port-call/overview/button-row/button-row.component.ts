import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ContentService } from '../../../../../shared/services/content.service';
import { PortCallService } from '../../../../../shared/services/port-call.service';

@Component({
  selector: 'app-button-row',
  templateUrl: './button-row.component.html',
  styleUrls: ['./button-row.component.css']
})
export class ButtonRowComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor(private contentService: ContentService, private portCallService: PortCallService) { }

  ngOnInit() {
  }

  onViewClick() {
    this.portCallService.setPortCall(this.rowData.overviewModel);
    this.contentService.setContent('View Port Call');
  }

  onEditClick() {
    this.portCallService.setPortCall(this.rowData.overviewModel);
    this.contentService.setContent('Register Port Call');
  }

  onClearanceClick() {
    console.log('ding dong');
  }

}
