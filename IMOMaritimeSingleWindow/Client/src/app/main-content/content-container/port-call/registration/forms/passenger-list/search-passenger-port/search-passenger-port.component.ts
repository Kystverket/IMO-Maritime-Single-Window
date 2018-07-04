import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'app/shared/services/location.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { SEARCH_AMOUNTS } from 'app/shared/constants/search-amounts';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';

@Component({
  selector: 'app-search-passenger-port',
  templateUrl: './search-passenger-port.component.html',
  styleUrls: ['./search-passenger-port.component.css']
})
export class SearchPassengerPortComponent implements OnInit {

  @Input() showDropdown = true;
  @Input() restrictTypeHarbour = false;
  @Input() component: string;
  @Input() label: string;


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
    private locationService: LocationService,
    private passengerService: PortCallPassengerListService
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
        } /*else {
          this.locationService.search(this.locationModel, this.restrictTypeHarbour, this.resultsWithoutDropdown).subscribe(
            data => {
              this.searchFailed = this.locationModel.length >= 2 && data.length === 0;
              switch (this.component) {
                case 'embarkation': {
                  console.log('Case: embarkation');
                  this.passengerService.setPortOfEmbarkation(data);
                  break;
                }
                case 'disembarkation': {
                  console.log('Case: disembarkation');
                  this.passengerService.setPortOfDisembarkation(data);
                  break;
                }
              }
              this.searching = false;
            });
        }*/
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    )

  selectLocation($event) {
    this.locationSelected = true;
    this.locationModel = $event.item;
    switch (this.component) {
      case 'embarkation': {
        this.passengerService.setPortOfEmbarkation(this.locationModel);
        break;
      }
      case 'disembarkation' : {
        this.passengerService.setPortOfDisembarkation(this.locationModel);
      }
    }
  }

  ngOnInit() {
  }
}
