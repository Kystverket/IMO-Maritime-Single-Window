import { Component, OnInit, Input } from '@angular/core';
import { ShipService } from 'app/shared/services/ship.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-ship',
  templateUrl: './search-ship.component.html',
  styleUrls: ['./search-ship.component.css']
})
export class SearchShipComponent implements OnInit {

  @Input() showDropdown = true;

  shipModel: any;
  searchText: any;
  shipSelected = false;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(private shipService: ShipService) { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(term => {
        this.searchFailed = false;
        this.searching = (term.length >= 2);
      }),
      switchMap(term => (this.showDropdown) ?
        this.shipService.search(term).pipe(
          tap(() => {
            this.searchFailed = false;
          }),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        ) : of([])
      ),
      tap(res => {
        if (this.showDropdown) {
          this.searching = false;
          this.searchFailed = this.shipModel.length >= 2 && res.length === 0;
        } else {
          this.shipService.search(this.shipModel).subscribe(
            data => {
              this.searchFailed = this.shipModel.length >= 2 && data.length === 0;
              this.shipService.setShipSearchData(data);
              this.searching = false;
            });
        }
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    )
  formatter = (x: { shipId: string }) => x.shipId;

  selectShip($event) {
    this.shipSelected = true;
    this.shipModel = $event.item;
    this.shipService.getShip($event.item.shipId).subscribe(
      result => {
        if (result) {
          this.shipService.setShipOverviewData(result);
        }
      }
    );
  }

  deselectShip() {
    this.shipSelected = false;
    this.shipService.setShipOverviewData(null);
  }

  ngOnInit() {
    this.shipService.setShipOverviewData(null);
  }
}
