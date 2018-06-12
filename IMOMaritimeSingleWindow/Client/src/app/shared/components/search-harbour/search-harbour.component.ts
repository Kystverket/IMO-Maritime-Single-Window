import { Component, OnInit } from '@angular/core';
import { LocationService } from 'app/shared/services/location.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-harbour',
  templateUrl: './search-harbour.component.html',
  styleUrls: ['./search-harbour.component.css']
})
export class SearchHarbourComponent implements OnInit {
  locationModel: any;
  locationSelected = false;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(private locationService: LocationService) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(term => {
        this.searchFailed = false;
        this.searching = term.length >= 2;
      }),
      switchMap(term =>
        this.locationService.searchHarbour(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(res => {
        this.searching = false;
        this.searchFailed = this.locationModel.length >= 2 && res.length === 0;
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
}
