import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, distinctUntilChanged, merge, switchMap, tap } from 'rxjs/operators';
import { ShipFlagCodeService } from 'app/shared/services/ship-flag-code.service';
import { ShipService } from 'app/shared/services/ship.service';
import { SEARCH_AMOUNTS } from 'app/shared/constants/search-amounts';

@Component({
    selector: 'app-search-ship-flag-code',
    templateUrl: './search-ship-flag-code.component.html',
    styleUrls: ['./search-ship-flag-code.component.css'],
    providers: [ShipFlagCodeService]
})
export class SearchShipFlagCodeComponent implements OnInit {
    resultsDropdown = SEARCH_AMOUNTS.DROPDOWN;
    shipFlagCodeModel: any;
    shipFlagCodeSelected = false;

    searching = false;
    searchFailed = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

    constructor(private shipService: ShipService) { }

    search = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(50),
            distinctUntilChanged(),
            tap((term) => {
                this.searchFailed = false;
                this.searching = (term.length >= 1);
            }),
            switchMap(term =>
                this.shipService.searchFlagCode(term, this.resultsDropdown).pipe(
                    tap(() => this.searchFailed = false),
                    catchError(() => {
                        this.searchFailed = true;
                        return of([]);
                    }))
            ),
            tap((res) => {
                this.searching = false;
                this.searchFailed = (this.shipFlagCodeModel.length >= 1 && res.length === 0);
            }),
            merge(this.hideSearchingWhenUnsubscribed)
        )

    formatter = (x: { shipFlagCodeId: string }) => x.shipFlagCodeId;

    selectShipFlagCode($event) {
        this.shipFlagCodeSelected = true;
        this.shipService.setShipFlagCodeData($event.item);
    }

    deselectShipFlagCode() {
        this.shipFlagCodeSelected = false;
        this.shipFlagCodeModel = null;
        this.shipService.setShipFlagCodeData(this.shipFlagCodeModel);
    }

    ngOnInit() {
        this.shipService.shipFlagCodeData$.subscribe(
            data => {
                if (data) {
                    this.shipFlagCodeModel = data;
                    this.shipFlagCodeSelected = true;
                }
            }
        );
    }
}
