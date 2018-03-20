import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ShipFlagCodeService } from '../../../../shared/services/ship-flag-code.service';
import { ShipService } from '../../../../shared/services/ship.service';

@Component({
    selector: 'app-search-ship-flag-code',
    templateUrl: './search-ship-flag-code.component.html',
    styleUrls: ['./search-ship-flag-code.component.css'],
    providers: [ShipFlagCodeService]
})
export class SearchShipFlagCodeComponent implements OnInit {

    shipFlagCodeModel: any;
    shipFlagCodeSelected = false;
    
    searching = false;
    searchFailed = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

    constructor(private shipFlagCodeService: ShipFlagCodeService, private shipService: ShipService) { }

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.searching = true)
            .switchMap(term => term.length < 2 ? [] :
                this.shipFlagCodeService.search(term)
            )
            .do(() => this.searching = false)
            .merge(this.hideSearchingWhenUnsubscribed)

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
    }
}
