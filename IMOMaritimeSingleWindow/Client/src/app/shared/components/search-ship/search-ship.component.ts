import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShipService } from '../../services/ship.service';

@Component({
  selector: 'app-search-ship',
  templateUrl: './search-ship.component.html',
  styleUrls: ['./search-ship.component.css']
})
export class SearchShipComponent implements OnInit {

  shipModel: any;
  shipSelected = false;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  constructor(private shipService: ShipService) { }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(150)
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
      .merge(this.hideSearchingWhenUnsubscribed)

  formatter = (x: { shipId: string }) => x.shipId;

  selectShip($event) {
    this.shipSelected = true;
    this.shipModel = $event.item;
    this.shipService.setShipOverviewData(this.shipModel);
  }

  deselectShip() {
    this.shipSelected = false;
    this.shipService.setShipOverviewData(null);
  }



  ngOnInit() {
    this.shipService.setShipOverviewData(null);
  }

}
