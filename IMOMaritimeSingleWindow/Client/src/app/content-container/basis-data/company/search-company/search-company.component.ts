import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CompanyService } from '../../../../shared/services/company.service';
import { ShipService } from '../../../../shared/services/ship.service';

@Component({
    selector: 'app-search-company',
    templateUrl: './search-company.component.html',
    styleUrls: ['./search-company.component.css'],
    providers: [CompanyService]
})
export class SearchCompanyComponent implements OnInit {

    companyModel: any;
    companySelected = false;
    
    searching = false;
    searchFailed = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

    constructor(private companyService: CompanyService, private shipService: ShipService) { }

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.searching = true)
            .switchMap(term => term.length < 2 ? [] :
                this.companyService.search(term)
            )
            .do(() => this.searching = false)
            .merge(this.hideSearchingWhenUnsubscribed)

    formatter = (x: { companyId: string }) => x.companyId;

    selectCompany($event) {
        this.companySelected = true;
        this.shipService.setCompanyData($event.item);
    }

    deselectCompany() {
        this.companySelected = false;
        this.companyModel = null;
        this.shipService.setCompanyData(this.companyModel);
    }

    ngOnInit() {
    }
}
