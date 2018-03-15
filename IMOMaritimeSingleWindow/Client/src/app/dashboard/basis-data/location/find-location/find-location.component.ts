import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { LocationService } from '../../../../shared/services/location.service';
import { PortCallService } from '../../../../shared/services/port-call.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-find-location',
    templateUrl: './find-location.component.html',
    styleUrls: ['./find-location.component.css'],
    providers: [LocationService]
})
export class FindLocationComponent implements OnInit {

    subscription: Subscription;

    locationFound = false;
    shipData: any;

    model: any;
    searching = false;
    searchFailed = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

    constructor(private portCallService: PortCallService, private locationService: LocationService) { }

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.searching = true)
            .switchMap(term =>
                this.locationService.search(term)
            )
            .do(() => this.searching = false)
            .merge(this.hideSearchingWhenUnsubscribed)
            .finally(() => this.locationFound = true);

    formatter = (x: { locationId: string }) => "Location ID: " + x.locationId;

    getShipData() {
        return this.shipData;
    }

    ngOnInit() {
        this.subscription = this.portCallService.shipData$.subscribe(
            data => this.shipData = data
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
