import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { SEARCH_AMOUNTS } from 'app/shared/constants/search-amounts';
import { CountryService } from 'app/shared/services/country.service';
import { Observable ,  of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { LocationModel } from '../../models/location-model';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent implements OnInit {

  @Input() showDropDown = true;

  @Output() selectCountry: EventEmitter<any> = new EventEmitter();
  @Output() deselectCountry: EventEmitter<any> = new EventEmitter();

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

  onFocus(e: Event): void {
    e.stopPropagation();
    setTimeout(() => {
      const inputEvent: Event = new Event('input');
      e.target.dispatchEvent(inputEvent);
    }, 0);
  }

  ngOnInit() {
  }

}
