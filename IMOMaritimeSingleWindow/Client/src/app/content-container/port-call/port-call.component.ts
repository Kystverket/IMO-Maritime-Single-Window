import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../shared/services/content.service';

@Component({
  selector: 'app-port-call',
  templateUrl: './port-call.component.html',
  styleUrls: ['./port-call.component.css'],
})
export class PortCallComponent implements OnInit {

  selectedComponent: string;
  
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.portCallName$.subscribe((content) => {
      console.log(content);
      this.selectedComponent = content;
    })
  }

}
