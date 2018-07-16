import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { SEARCH_AMOUNTS } from '../../constants/search-amounts';
import { ShipSearchService } from './ship-search.service';
import { ShipService } from '../../services/ship.service';

@Component({
  selector: 'app-search-ship',
  templateUrl: './search-ship.component.html',
  styleUrls: ['./search-ship.component.css'],
  providers: [ShipSearchService]
})
export class SearchShipComponent implements OnInit {

  @Input() showDropdown = true;

  @Output() shipSearchResult = new EventEmitter<any>();
  @Output() shipResult = new EventEmitter<any>();

  resultsDropdown = SEARCH_AMOUNTS.DROPDOWN;
  resultsWithoutDropdown = SEARCH_AMOUNTS.WITHOUT_DROPDOWN;

  shipModel: any;
  searchText: any;
  shipSelected = false;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(private shipService: ShipService, private shipSearchService: ShipSearchService) { }

  ngOnInit() { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(term => {
        this.searchFailed = false;
        this.searching = (term.length >= 2);
      }),
      switchMap(term => (this.showDropdown) ?
        this.shipSearchService.search(term, this.resultsDropdown).pipe(
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
          this.shipSearchService.search(this.shipModel, this.resultsWithoutDropdown).subscribe(
            data => {
              this.searchFailed = this.shipModel.length >= 2 && data.length === 0;
              this.shipSearchResult.emit(data);
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
          this.shipResult.emit(result);
        }
      }
    );
  }

  deselectShip() {
    this.shipSelected = false;
    this.shipResult.emit(null);
  }

}
