import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { CountryService } from 'app/shared/services/country.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { SEARCH_AMOUNTS } from 'app/shared/constants/search-amounts';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent implements OnInit {

  @Input() label: string;
  @Input() showDropDown = true;

  @Output() selectCountry: EventEmitter<any> = new EventEmitter();
  @Output() deselectCountry: EventEmitter<any> = new EventEmitter();

  locationFound = false;
  locationFlag: string;
  locationProperties = LocationProperties.PROPERTIES;
  locationInfo: any[];

  resultsDropdown = SEARCH_AMOUNTS.DROPDOWN;
  resultsWithoutDropdown = SEARCH_AMOUNTS.WITHOUT_DROPDOWN_2;
  locationModel: any;
  locationSelected = false;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(
    private countryService: CountryService
  ) { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(term => {
        this.searchFailed = false;
        this.searching = (term.length >= 2);
      }),
      switchMap(term => (this.showDropDown) ?
        this.countryService.search(term).pipe(
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
        if (this.showDropDown) {
          this.searching = false;
          this.searchFailed = this.locationModel.length >= 2 && res.length === 0;
        } else {
          this.countryService.search(this.locationModel).subscribe(
            data => {
              console.log(data);
              this.searchFailed = this.locationModel.length >= 2 && data.length === 0;
              // this.countryService.setCountrySearchData(data);
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
    this.locationFlag = ($event.item.twoCharCode) ? $event.item.twoCharCode.toLowerCase() : null;
    this.selectCountry.emit($event);
    // this.countryService.setCountryData(this.locationModel);
  }

  deselectLocation() {
    this.locationSelected = false;
    this.locationModel = null;
    this.locationFlag = null;
    this.deselectCountry.emit();
  }

  ngOnInit() {
  }

}
