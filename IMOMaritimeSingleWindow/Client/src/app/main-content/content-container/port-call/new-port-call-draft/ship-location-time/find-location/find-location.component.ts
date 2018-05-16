import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { LocationService } from '../../../../../../shared/services/location.service';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { LocationOverviewModel } from '../../../../../../shared/models/location-overview-model';

@Component({
    selector: 'app-find-location',
    templateUrl: './find-location.component.html',
    styleUrls: ['./find-location.component.css'],
    providers: [LocationService]
})
export class FindLocationComponent implements OnInit {

    locationModel: LocationOverviewModel;
    locationFound: boolean = false;

    searching: boolean = false;
    searchFailed: boolean = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

    constructor(private portCallService: PortCallService, private locationService: LocationService) { }

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(150)
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
            locData => {
                if (locData) {
                    this.locationFound = true;
                    this.locationModel = locData;
                } else {
                    this.locationFound = false;
                }
            }
        );
    }
}
