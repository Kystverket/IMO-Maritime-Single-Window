import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { LocationService } from '../../../../shared/services/location.service';
import { PortCallService } from '../../../../shared/services/port-call.service';

@Component({
    selector: 'app-find-location',
    templateUrl: './find-location.component.html',
    styleUrls: ['./find-location.component.css'],
    providers: [LocationService]
})
export class FindLocationComponent implements OnInit {

    locationModel: any;
    locationFound = false;
    
    searching = false;
    searchFailed = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

    constructor(private portCallService: PortCallService, private locationService: LocationService) { }

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.searching = true)
            .switchMap(term => term.length < 2 ? [] :
                this.locationService.search(term)
            )
            .do(() => this.searching = false)
            .merge(this.hideSearchingWhenUnsubscribed)

    formatter = (x: { locationId: string }) => x.locationId;

    selectLocation($event) {
        this.locationFound = true;
        this.portCallService.setLocationData($event.item);
    }

    deselectLocation() {
        this.locationFound = false;
        this.locationModel = null;
        this.portCallService.setLocationData(this.locationModel);
    }

    ngOnInit() {
    }
}
