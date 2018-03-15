import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../shared/services/port-call.service';

@Component({
  selector: 'app-port-call-registration',
  templateUrl: './port-call-registration.component.html',
  styleUrls: ['./port-call-registration.component.css'],
  providers: [PortCallService]
})
export class PortCallRegistrationComponent implements OnInit {

  constructor(){}

  ngOnInit() {

  }

}
