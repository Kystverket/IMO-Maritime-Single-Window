import { Component, OnInit, Input } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { CountryService } from '../../../../../../../shared/services/country.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { SEARCH_AMOUNTS } from 'app/shared/constants/search-amounts';
import { locateHostElement } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent implements OnInit {

  @Input() country: string;

  @Input() showDropDown = true;

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
        console.log(res);

        if (this.showDropDown) {
          this.searching = false;
          this.searchFailed = this.locationModel.length >= 2 && res.length === 0;
        } else {
          this.countryService.search(this.locationModel).subscribe(
            data => {
              console.log(data);
              this.searchFailed = this.locationModel.length >= 2 && data.length === 0;
              this.countryService.setCountrySearchData(data);
              this.searching = false;
            });
        }
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    )

  selectLocation($event) {
    this.locationSelected = true;
    this.locationModel = $event.item;
    this.countryService.setCountryData(this.locationModel);
  }

  deselectLocation() {
    this.locationSelected = false;
    this.countryService.setCountryData(null);
  }

  ngOnInit() {
    this.countryService.setCountryData(null);
    console.log(this.country);
  }

}
