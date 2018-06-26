import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'app/shared/services/location.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { SEARCH_AMOUNTS } from 'app/shared/constants/search-amounts';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css'],
  providers: [LocationService]
})
export class SearchLocationComponent implements OnInit {

  @Input() showDropdown = true;
  @Input() restrictTypeHarbour = false;

  resultsDropdown = SEARCH_AMOUNTS.DROPDOWN;
  resultsWithoutDropdown = SEARCH_AMOUNTS.WITHOUT_DROPDOWN_2;
  locationModel: any;
  locationSelected = false;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(private locationService: LocationService) { }
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(term => {
        this.searchFailed = false;
        this.searching = (term.length >= 2);
      }),
      switchMap(term => (this.showDropdown) ?
        this.locationService.search(term, this.restrictTypeHarbour, this.resultsDropdown).pipe(
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
          this.locationService.search(this.locationModel, this.restrictTypeHarbour, this.resultsWithoutDropdown).subscribe(
            data => {
              this.searchFailed = this.locationModel.length >= 2 && data.length === 0;
              this.locationService.setLocationSearchData(data);
              this.searching = false;
            });
        }
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    )

  formatter = (x: { locationId: string }) => x.locationId;

  selectLocation($event) {
    this.locationSelected = true;
    this.locationModel = $event.item;
    this.locationService.setLocationData(this.locationModel);
  }

  deselectLocation() {
    this.locationSelected = false;
    this.locationService.setLocationData(null);
  }

  ngOnInit() {
    this.locationService.setLocationData(null);
  }

  getService() {
    return this.locationService;
  }
}
