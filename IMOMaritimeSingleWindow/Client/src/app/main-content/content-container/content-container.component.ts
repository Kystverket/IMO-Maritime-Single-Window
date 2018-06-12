import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ContentService } from 'app/shared/services/content.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {

  cn = CONTENT_NAMES;
  selectedComponent: string;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.contentName$.subscribe((content) => {
      this.selectedComponent = content;
    });
  }

}
