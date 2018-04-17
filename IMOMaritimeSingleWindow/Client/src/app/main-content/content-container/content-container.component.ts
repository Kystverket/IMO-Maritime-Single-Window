import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ContentService } from '../../shared/services/content.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {

  selectedComponent: string;

  constructor(
    private contentService: ContentService    
  ) {}

  ngOnInit() {
    this.contentService.contentName$.subscribe((content) => {
      this.selectedComponent = content;
    });
  }

}
