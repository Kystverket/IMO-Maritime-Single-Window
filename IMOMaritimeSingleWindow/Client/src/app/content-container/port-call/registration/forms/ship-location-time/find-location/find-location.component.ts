import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { LocationService } from '../../../../../../shared/services/location.service';
import { PortCallService } from '../../../../../../shared/services/port-call.service';

@Component({
    selector: 'app-find-location',
    templateUrl: './find-location.component.html',
    styleUrls: ['./find-location.component.css'],
    providers: [LocationService]
})
export class FindLocationComponent implements OnInit {

    locationModel: any;
    locationFound: boolean = false;
    portCallRegistered: boolean;

    searching: boolean = false;
    searchFailed: boolean = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

    constructor(private portCallService: PortCallService, private locationService: LocationService) { }

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do((term) => {
                this.searchFailed = false;
                if (term.length >= 2) this.searching = true;
            })
            .switchMap(term => term.length < 2 ? [] :
                this.locationService.search(term)
            )
            .do((text$) => {
                this.searching = false;
                if (text$.length == 0) {
                    this.searchFailed = true;
                }
            })
            .merge(this.hideSearchingWhenUnsubscribed)

    formatter = (x: { locationId: string }) => x.locationId;

    selectLocation($event) {
        this.portCallService.setLocationData($event.item);
    }

    deselectLocation() {
        this.portCallService.setLocationData(null);
    }

    ngOnInit() {
        this.portCallService.locationData$.subscribe(
            locationData => {
                this.locationModel = locationData;
                this.locationFound = locationData != null;
            }
        );
        this.portCallService.portCallRegistered$.subscribe(
            registered => {
                this.portCallRegistered = registered;
            }
        );
    }
}
