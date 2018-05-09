import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../shared/services/port-call.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    // this.portCallService.port

  }

}
