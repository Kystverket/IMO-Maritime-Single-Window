import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../../shared/services/content.service';
import { PortCallService } from '../../../../../shared/services/port-call.service';

@Component({
  selector: 'app-save-and-send',
  templateUrl: './save-and-send.component.html',
  styleUrls: ['./save-and-send.component.css']
})
export class SaveAndSendComponent implements OnInit {

  detailsDataIsPrisine: boolean = true;

  constructor(private contentService: ContentService, private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.detailsPristine$.subscribe(
      detailsDataIsPristine => {        
        this.detailsDataIsPrisine = detailsDataIsPristine;
      }
    );
  }

  saveDetails() {
    // this.portCallService.saveDetails(null, null);
  }

}
