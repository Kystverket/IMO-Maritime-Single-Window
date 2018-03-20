import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CountryService } from '../../../../shared/services/country.service';
import { ShipService } from '../../../../shared/services/ship.service';

@Component({
    selector: 'app-search-country',
    templateUrl: './search-country.component.html',
    styleUrls: ['./search-country.component.css'],
    providers: [CountryService]
})
export class SearchCountryComponent implements OnInit {

    countryModel: any;
    dropdownPlaceholder: any = "Choose flag code";

    flagCodeModel: any;
    countrySelected = false;

    flagCodeSelected = false;

    searching = false;
    searchFailed = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

    constructor(private countryService: CountryService, private shipService: ShipService) { }

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
        this.shipService.setCountryData($event.item);
    }

    deselectCountry() {
        this.countrySelected = false;
        this.countryModel = null;
        this.shipService.setCountryData(this.countryModel);
        this.deselectFlagCode();
        
    }

    selectFlagCode(flagCode: any) {
        this.flagCodeModel = flagCode;
        this.dropdownPlaceholder = flagCode.shipFlagCodeName;
        this.flagCodeSelected = true;
        this.shipService.setShipFlagCodeData(flagCode);
    }

    deselectFlagCode() {
        this.flagCodeSelected = false;
        this.flagCodeModel = null;
        this.shipService.setShipFlagCodeData(this.flagCodeModel);
    }

    ngOnInit() {
        
    }
}
