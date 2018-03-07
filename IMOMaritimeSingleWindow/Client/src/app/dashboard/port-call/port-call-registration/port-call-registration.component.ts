import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-port-call-registration',
  templateUrl: './port-call-registration.component.html',
  styleUrls: ['./port-call-registration.component.css']
})
export class PortCallRegistrationComponent implements OnInit {

  shipFound: boolean = false;

  public model: any;

  constructor(config: NgbTypeaheadConfig) {
    config.showHint = true;
  }

  search = (text$: Observable<String>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? [] : ["test", "teseest"]);

  formatter = (x: {shipName: string}) => x.shipName;

  ngOnInit() {

  }

}
