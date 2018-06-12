import { Component, OnInit } from '@angular/core';
import { PortCallService } from 'app/shared/services/port-call.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private portCallService: PortCallService) { }

  ngOnInit() { }
}
