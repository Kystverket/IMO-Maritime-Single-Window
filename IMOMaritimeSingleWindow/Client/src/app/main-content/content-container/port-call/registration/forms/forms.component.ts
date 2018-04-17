import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../../shared/services/content.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  selectedComponent: string;

  constructor(private contentService: ContentService) { }

  ngOnInit() { 
    this.contentService.portCallFormName$.subscribe((content) => {
      this.selectedComponent = content;
    });
  }
}