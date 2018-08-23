import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from 'app/shared/services/content.service';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  @Input() standAlone = true;
  iconPath = 'assets/images/icons/128x128/white/';

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

  onClick() {
    this.contentService.setContent(CONTENT_NAMES.VIEW_PORT_CALLS);
  }

}
