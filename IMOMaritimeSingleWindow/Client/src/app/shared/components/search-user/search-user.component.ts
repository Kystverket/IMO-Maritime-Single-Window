import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { SEARCH_AMOUNTS } from '../../constants/search-amounts';
import { SearchUserService } from './search-user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
  providers: [SearchUserService]
})
export class SearchUserComponent implements OnInit {

  @Input() showDropdown = true;

  @Output() userResult = new EventEmitter<any>();
  @Output() userSearchResult = new EventEmitter<any>();

  resultsDropdown = SEARCH_AMOUNTS.DROPDOWN;
  resultsWithoutDropdown = SEARCH_AMOUNTS.WITHOUT_DROPDOWN;

  userModel: any;
  userSelected: boolean;

  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () =>
    (this.searching = false)
  );

  constructor(private searchUserService: SearchUserService) { }

  ngOnInit() {
    this.userSelected = false;
    this.searchUserService.getPlaceHolderData().subscribe(res => {
      this.userSearchResult.emit(res);
    });
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
        this.searchUserService.search(term, this.resultsDropdown).pipe(
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
          this.searchFailed = this.userModel.length >= 2 && res.length === 0;
        } else {
          this.searchUserService.search(this.userModel, this.resultsWithoutDropdown).subscribe(
            data => {
              this.searchFailed = this.userModel.length >= 2 && data.length === 0;
              this.userSearchResult.emit(data);
              this.searching = false;
            });
        }
      }),
      merge(this.hideSearchingWhenUnsubscribed)
    )
  formatter = (x: { shipId: string }) => '';

  selectUser($event) {
    this.userSelected = true;
    this.userModel = $event.item;

    this.searchUserService.getUser($event.item.email).subscribe(
      result => {
        if (result) {
          this.userResult.emit(result);
        }
      }
    );
  }

}
