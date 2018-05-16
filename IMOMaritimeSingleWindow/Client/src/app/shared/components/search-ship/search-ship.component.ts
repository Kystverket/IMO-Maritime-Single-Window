import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
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
    text$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap((term) => {
        this.searchFailed = false;
        this.searching = (term.length >= 2)
      }),
      switchMap(term =>
        this.shipService.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap((res) => {
        this.searching = false;
        this.searchFailed = (this.shipModel.length >= 2 && res.length === 0);
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    );
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
