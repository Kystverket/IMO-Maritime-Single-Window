import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SEARCH_AMOUNTS } from 'app/shared/constants/search-amounts';



import { Observable ,  of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { SearchShipFlagCodeService } from './search-ship-flag-code.service';

@Component({
  selector: 'app-search-ship-flag-code',
  templateUrl: './search-ship-flag-code.component.html',
  styleUrls: ['./search-ship-flag-code.component.css'],
  providers: [SearchShipFlagCodeService]
})
export class SearchShipFlagCodeComponent implements OnInit {

  @Output() shipFlagCodeResult = new EventEmitter<any>();

  resultsDropdown = SEARCH_AMOUNTS.DROPDOWN;

  shipFlagCodeModel: any;
  shipFlagCodeSelected: boolean;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(private searchShipFlagCodeService: SearchShipFlagCodeService) {
    this.shipFlagCodeSelected = false;
  }

  ngOnInit() { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      tap((term) => {
        this.searchFailed = false;
        this.searching = (term.length >= 1);
      }),
      switchMap(term =>
        this.searchShipFlagCodeService.search(term, this.resultsDropdown).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap((res) => {
        this.searching = false;
        this.searchFailed = (this.shipFlagCodeModel.length >= 1 && res.length === 0);
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    )

  formatter = (x: { shipFlagCodeId: string }) => '';

  selectShipFlagCode($event) {
    this.shipFlagCodeModel = $event.item;
    this.shipFlagCodeSelected = true;
    this.shipFlagCodeResult.emit(this.shipFlagCodeModel);
  }
}
