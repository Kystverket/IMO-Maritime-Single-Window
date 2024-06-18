import { Component, OnDestroy, OnInit } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ContentService } from 'app/shared/services/content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit, OnDestroy {

  cn = CONTENT_NAMES;
  selectedComponent: string;

  contentNameSubscription: Subscription;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentNameSubscription = this.contentService.contentName$.subscribe((content) => {
      this.selectedComponent = content;
    });
  }

  ngOnDestroy() {
    this.contentNameSubscription.unsubscribe();
  }

}
