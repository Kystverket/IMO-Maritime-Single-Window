import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationService } from 'app/shared/services/location.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { SEARCH_AMOUNTS } from 'app/shared/constants/search-amounts';

@Component({
  selector: 'app-search-passenger-port',
  templateUrl: './search-passenger-port.component.html',
  styleUrls: ['./search-passenger-port.component.css']
})
export class SearchPassengerPortComponent implements OnInit {

  @Input() showDropdown = true;
  @Input() restrictTypeHarbour = false;
  @Input() label: string;
  @Input() component: string;

  @Output() selectPort: EventEmitter<any> = new EventEmitter();

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
    private locationService: LocationService
  ) { }

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
              this.selectPort.emit(data);
              this.searching = false;
            });
        }
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    )

    formatter = (x: { locationId: string }) => x.locationId;

  selectLocation($event) {
    this.locationSelected = true;
    /// this.locationModel = $event.item;
    this.selectPort.emit($event);

    /*this.locationSelected = true;
    this.locationModel = $event.item;
    switch (this.component) {
      case 'embarkation': {
        this.passengerService.setPortOfEmbarkation(this.locationModel);
        break;
      }
      case 'disembarkation' : {
        this.passengerService.setPortOfDisembarkation(this.locationModel);
      }
    }*/
  }

  ngOnInit() {
  }
}
