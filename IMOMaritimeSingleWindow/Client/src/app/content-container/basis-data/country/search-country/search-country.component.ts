import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CountryService } from '../../../../shared/services/country.service';

@Component({
    selector: 'app-search-country',
    templateUrl: './search-country.component.html',
    styleUrls: ['./search-country.component.css'],
    providers: [CountryService]
})
export class SearchCountryComponent implements OnInit {

    countryModel: any;
    countrySelected = false;

    searching = false;
    searchFailed = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

    constructor(private countryService: CountryService) { }

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.searching = true)
            .switchMap(term => term.length < 2 ? [] :
                this.countryService.search(term)
            )
            .do(() => this.searching = false)
            .merge(this.hideSearchingWhenUnsubscribed)

    formatter = (x: { countryId: string }) => x.countryId;

    selectCountry($event) {
        this.countrySelected = true;
    }

    deselectCountry() {
        this.countrySelected = false;
        this.countryModel = null;
    }

    ngOnInit() {
        
    }
}
