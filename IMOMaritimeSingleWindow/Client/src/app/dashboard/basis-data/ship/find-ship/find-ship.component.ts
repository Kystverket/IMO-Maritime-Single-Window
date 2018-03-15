import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShipService } from '../../../../shared/services/ship.service';
import { Subscription } from 'rxjs';
import { PortCallService } from '../../../../shared/services/port-call.service';

@Component({
  selector: 'app-find-ship',
  templateUrl: './find-ship.component.html',
  styleUrls: ['./find-ship.component.css'],
  providers: [ShipService]
})
export class FindShipComponent implements OnInit {

  subscription: Subscription;
  shipModel: any;

  shipFound = false;
  
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private portCallService: PortCallService, private shipService: ShipService) { }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term => term.length < 2 ? [] :
        this.shipService.search(term)
      )
      .do(() => this.searching = false)
      .merge(this.hideSearchingWhenUnsubscribed);


  shipSelected(){
    this.shipFound = true;
    this.portCallService.setShipData(this.shipModel);
  }

  unselectShip(){
    this.shipFound = false;
    this.shipModel = [];
  }

  formatter = (x: {shipId: string}) => x.shipId;

  ngOnInit() {
  }

}
