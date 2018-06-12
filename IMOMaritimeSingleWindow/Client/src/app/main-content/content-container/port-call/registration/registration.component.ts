import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/shared/services/content.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  selectedComponent: string;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.portCallFormName$.subscribe(content => {
      this.selectedComponent = content;
    });
  }
}
