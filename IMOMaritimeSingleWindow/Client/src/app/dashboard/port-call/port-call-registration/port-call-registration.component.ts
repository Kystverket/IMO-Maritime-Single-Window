import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Subject} from 'rxjs/Subject'
import { ShipService } from '../../../shared/services/ship.service';
import { LocationService } from '../../../shared/services/location.service';

@Component({
  selector: 'app-port-call-registration',
  templateUrl: './port-call-registration.component.html',
  styleUrls: ['./port-call-registration.component.css'],
})
export class PortCallRegistrationComponent implements OnInit {

  constructor(){}

  ngOnInit() {

  }

}
