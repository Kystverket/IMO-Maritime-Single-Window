import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../shared/services/content.service';

@Component({
  selector: 'app-clearance',
  templateUrl: './clearance.component.html',
  styleUrls: ['./clearance.component.css']
})
export class ClearanceComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

  goBack() {
    this.contentService.setContent("Port Call");
  }

}
