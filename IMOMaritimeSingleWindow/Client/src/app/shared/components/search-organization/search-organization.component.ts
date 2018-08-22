import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SEARCH_AMOUNTS } from 'app/shared/constants/search-amounts';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { SearchOrganizationService } from './search-organization.service';

@Component({
  selector: 'app-search-organization',
  templateUrl: './search-organization.component.html',
  styleUrls: ['./search-organization.component.css'],
  providers: [SearchOrganizationService]
})
export class SearchOrganizationComponent implements OnInit {

  @Input() showDropdown = true;
  @Input() header = 'Search using organization name or organization number';

  @Output() organizationResult = new EventEmitter<any>();
  @Output() organizationSearchResult = new EventEmitter<any>();

  resultsDropdown = SEARCH_AMOUNTS.DROPDOWN;
  resultsWithoutDropdown = SEARCH_AMOUNTS.WITHOUT_DROPDOWN;

  organizationModel: any;
  organizationSelected: boolean;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(private searchOrganizationService: SearchOrganizationService) { }

  ngOnInit() {
    this.organizationSelected = false;
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
        this.searchOrganizationService.search(term, this.resultsDropdown).pipe(
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
          this.searchFailed = this.organizationModel.length >= 2 && res.length === 0;
        } else {
          this.searchOrganizationService.search(this.organizationModel, this.resultsWithoutDropdown).subscribe(
            data => {
              this.searchFailed = this.organizationModel.length >= 2 && data.length === 0;
              this.organizationSearchResult.emit(data);
              this.searching = false;
            });
        }
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    )
  formatter = (x: { organizationId: string }) => x.organizationId;

  selectOrganization($event) {
    this.organizationSelected = true;
    this.organizationModel = $event.item;
    this.organizationResult.emit(this.organizationModel);
  }

}
