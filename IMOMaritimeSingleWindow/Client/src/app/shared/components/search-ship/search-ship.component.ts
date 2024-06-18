import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SHIP_STATUSES } from 'app/shared/constants/enumValues';
import { Observable ,  of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { SEARCH_AMOUNTS } from '../../constants/search-amounts';
import { SearchShipService } from './search-ship.service';

@Component({
  selector: 'app-search-ship',
  templateUrl: './search-ship.component.html',
  styleUrls: ['./search-ship.component.css'],
  providers: [SearchShipService]
})
export class SearchShipComponent implements OnInit {

  @Input() showDropdown = true;
  @Input() filter: SHIP_STATUSES;

  @Output() shipResult = new EventEmitter<any>();
  @Output() shipSearchResult = new EventEmitter<any>();

  resultsDropdown = SEARCH_AMOUNTS.DROPDOWN;
  resultsWithoutDropdown = SEARCH_AMOUNTS.WITHOUT_DROPDOWN;

  shipModel: any;
  shipSelected: boolean;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(private searchShipService: SearchShipService) { }

  ngOnInit() {
    this.shipSelected = false;
    this.searchShipService.getPlaceHolderData().subscribe(res => {
      this.shipSearchResult.emit(res);
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(term => {
        this.searchFailed = false;
        this.searching = (term.length >= 2);
      }),
      switchMap(term => (this.showDropdown) ?
        this.searchShipService.search(this.filter, term, this.resultsDropdown).pipe(
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
          this.searchShipService.search(this.filter, this.shipModel, this.resultsWithoutDropdown).subscribe(
            data => {
              this.searchFailed = this.shipModel.length >= 2 && data.length === 0;
              this.shipSearchResult.emit(data);
              this.searching = false;
            });
        }
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    )
  formatter = (x: { shipId: string }) => '';

  selectShip($event) {
    this.shipSelected = true;
    this.shipModel = $event.item;

    this.searchShipService.getShip($event.item.shipId).subscribe(
      result => {
        if (result) {
          this.shipResult.emit(result);
        }
      }
    );
  }

}
