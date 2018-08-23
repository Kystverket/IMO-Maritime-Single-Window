import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { SEARCH_AMOUNTS } from 'app/shared/constants/search-amounts';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap, filter } from 'rxjs/operators';
import { SearchLocationService } from './search-location.service';
import { LocationModel } from '../../models/location-model';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css'],
  providers: [SearchLocationService]
})
export class SearchLocationComponent implements OnInit {

  @Input() showDropdown = true;
  @Input() restrictTypeHarbour = false;

  @Output() locationResult = new EventEmitter<LocationModel>();
  @Output() locationSearchResult = new EventEmitter<any>();

  resultsDropdown = SEARCH_AMOUNTS.DROPDOWN;
  resultsWithoutDropdown = SEARCH_AMOUNTS.WITHOUT_DROPDOWN_2;

  locationModel: any;
  locationSelected: boolean;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(private locationSearchService: SearchLocationService) {
    this.locationSelected = false;
  }

  ngOnInit() { }

  formatter = (x: { locationId: string }) => '';

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(term => {
        this.searchFailed = false;
        this.searching = (term.length >= 2);
      }),
      switchMap(term => (this.showDropdown) ?
        this.locationSearchService.search(term, this.restrictTypeHarbour, this.resultsDropdown).pipe(
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
          this.searchFailed = this.locationModel.length >= 2 && res.length === 0;
        } else {
          this.locationSearchService.search(this.locationModel, this.restrictTypeHarbour, this.resultsWithoutDropdown).subscribe(
            data => {
              this.searchFailed = this.locationModel.length >= 2 && data.length === 0;
              this.locationSearchResult.emit(data);
              this.searching = false;
            });
        }
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    )


  selectLocation($event) {
    this.locationModel = $event.item;
    this.locationSelected = true;
    this.locationResult.emit(this.locationModel);
  }


  onFocus(e: Event): void {
    e.stopPropagation();
    setTimeout(() => {
      const inputEvent: Event = new Event('input');
      e.target.dispatchEvent(inputEvent);
    }, 0);
  }
}
