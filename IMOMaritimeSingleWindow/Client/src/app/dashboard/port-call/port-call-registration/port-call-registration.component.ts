import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ShipService } from '../../../shared/services/ship.service';

@Component({
  selector: 'app-port-call-registration',
  templateUrl: './port-call-registration.component.html',
  styleUrls: ['./port-call-registration.component.css'],
  providers: [ShipService]
})
export class PortCallRegistrationComponent implements OnInit {

  shipFound: boolean = false;

  results: string[];

  model: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private shipService: ShipService, config: NgbTypeaheadConfig) {
    config.showHint = true;
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this.shipService.search(term)
      )
      .do(() => this.searching = false)
      .merge(this.hideSearchingWhenUnsubscribed);

  formatter = (x: {shipName: string}) => x.shipName;

  ngOnInit() {

  }

}
