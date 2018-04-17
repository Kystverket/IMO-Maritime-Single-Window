import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PortCallService } from '../../../../../../../shared/services/port-call.service';
import { ShipService } from '../../../../../../../shared/services/ship.service';
import { ShipOverviewModel } from '../../../../../../../shared/models/ship-overview-model';

@Component({
  selector: 'app-find-ship',
  templateUrl: './find-ship.component.html',
  styleUrls: ['./find-ship.component.css'],
  providers: [ShipService]
})
export class FindShipComponent implements OnInit {

  shipModel: ShipOverviewModel;
  shipFound: boolean = false;
  portCallRegistered: boolean;

  searching: boolean = false;
  searchFailed: boolean = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private portCallService: PortCallService, private shipService: ShipService) { }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do((term) => {
        this.searchFailed = false;
        if (term.length >= 2) this.searching = true;
      })
      .switchMap(term => term.length < 2 ? [] :
        this.shipService.searchShip(term)
      )
      .do((text$) => {
        this.searching = false;
        if (text$.length == 0) {
          this.searchFailed = true;
        }
      })
      .merge(this.hideSearchingWhenUnsubscribed);

  formatter = (x: { shipId: string }) => x.shipId;

  selectShip($event) {
    this.portCallService.setShipData($event.item);
  }

  deselectShip() {
    this.portCallService.setShipData(null);
  }

  ngOnInit() {
    this.portCallService.overviewData$.subscribe(
      ovData => {
        if (ovData != null) {
          this.shipFound = ovData.shipOverview != null;
          this.shipModel = this.shipFound ? ovData.shipOverview : null;
        }
        
      }
    );
    this.portCallService.portCallRegistered$.subscribe(
      registered => {
        this.portCallRegistered = registered;
      }
    );
  }
}
