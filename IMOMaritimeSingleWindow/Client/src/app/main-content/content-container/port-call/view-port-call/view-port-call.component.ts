import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from '../../../../shared/constants/content-names';
import { ContentService } from '../../../../shared/services/content.service';

@Component({
  selector: 'app-view-port-call',
  templateUrl: './view-port-call.component.html',
  styleUrls: ['./view-port-call.component.css']
})
export class ViewPortCallComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

  goBack() {
    this.contentService.setContent(CONTENT_NAMES.VIEW_PORT_CALLS);
  }

}
