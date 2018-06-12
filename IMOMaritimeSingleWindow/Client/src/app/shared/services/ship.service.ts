import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ShipContactModel } from '../models/ship-contact-model';
import { AuthRequest } from './auth.request.service';
import { SearchService } from './search.service';

@Injectable()
export class ShipService {

    private searchService: SearchService;
    private shipSearchUrl: string;
    private shipTypeUrl: string;
    private hullTypeUrl: string;
    private lengthTypeUrl: string;
    private breadthTypeUrl: string;
    private powerTypeUrl: string;
    private shipSourceUrl: string;
    private shipStatusListUrl: string;
    private shipUrl: string;
    private flagCodeSearchUrl: string;
    private contactListShipUrl: string;
    private shipContactListUrl: string;

    constructor(
        private http: Http,
        private authRequest: AuthRequest
    ) {
        this.searchService = new SearchService(http);
        this.shipUrl = 'api/ship';
        this.shipSearchUrl = 'api/ship/search';
        this.shipTypeUrl = 'api/shiptype';
        this.hullTypeUrl = 'api/shiphulltype';
        this.lengthTypeUrl = 'api/shiplengthtype';
        this.breadthTypeUrl = 'api/shipbreadthtype';
        this.powerTypeUrl = 'api/shippowertype';
        this.shipSourceUrl = 'api/shipsource';
        this.shipStatusListUrl = 'api/shipstatus';
        this.flagCodeSearchUrl = 'api/shipflagcode/search';
        this.contactListShipUrl = 'api/shipcontact/ship';
        this.shipContactListUrl = 'api/shipcontact/list';
    }



    private organizationDataSource = new BehaviorSubject<any>(null);
    organizationData$ = this.organizationDataSource.asObservable();

    private countryDataSource = new BehaviorSubject<any>(null);
    countryData$ = this.countryDataSource.asObservable();

    private shipFlagCodeDataSource = new BehaviorSubject<any>(null);
    shipFlagCodeData$ = this.shipFlagCodeDataSource.asObservable();

    private shipOverviewDataSource = new BehaviorSubject<any>(null);
    shipOverviewData$ = this.shipOverviewDataSource.asObservable();

    getShip(id: number) {
        const uri = [this.shipUrl, id].join('/');
        return this.http.get(uri)
                .map(res => res.json());
    }

    setShipOverviewData(data) {
        this.shipOverviewDataSource.next(data);
    }

    registerShip(newShip: any) {
        const auth_header = this.authRequest.GetHeaders();
        const options = new RequestOptions({ headers: auth_header });
        return this.http.post(this.shipUrl, newShip, options)
                .map(res => res.json());
    }

    updateShip(ship: any) {
        const auth_header = this.authRequest.GetHeaders();
        const options = new RequestOptions({ headers: auth_header });
        return this.http.post(this.shipUrl, ship, options)
                .map(res => res.json());
    }

    saveShipContactList(shipContactList: ShipContactModel[]) {
        return this.http.post(this.shipContactListUrl, shipContactList)
                .map(res => res.json());
    }

    updateShipContactList(shipContactList: ShipContactModel[]) {
        return this.http.put(this.shipContactListUrl, shipContactList)
                .map(res => res.json());

    }

    setOrganizationData(data) {
        this.organizationDataSource.next(data);
    }

    setCountryData(data) {
        this.countryDataSource.next(data);
    }

    setShipFlagCodeData(data) {
        this.shipFlagCodeDataSource.next(data);
    }

    search(term: string) {
        if (term.length < 2) {
            return Observable.of([]);
        }
        return this.searchService.search(this.shipSearchUrl, term);
    }

    searchFlagCode(term: string) {
        if (term.length < 1) {
            return Observable.of([]);
        }
        return this.searchService.search(this.flagCodeSearchUrl, term);
    }

    getShipTypes() {
        return this.http.get(this.shipTypeUrl)
            .map(res => res.json());
    }

    getHullTypes() {
        return this.http.get(this.hullTypeUrl)
            .map(res => res.json());
    }

    getLengthTypes() {
        return this.http.get(this.lengthTypeUrl)
            .map(res => res.json());
    }

    getBreadthTypes() {
        return this.http.get(this.breadthTypeUrl)
            .map(res => res.json());
    }

    getPowerTypes() {
        return this.http.get(this.powerTypeUrl)
            .map(res => res.json());
    }

    getShipSources() {
        return this.http.get(this.shipSourceUrl)
            .map(res => res.json());
    }

    getShipStatusList() {
        return this.http.get(this.shipStatusListUrl)
            .map(res => res.json());
    }

    getContactList(shipId: number) {
        const uri: string = [this.contactListShipUrl, shipId].join('/');
        return this.http.get(uri)
            .map(res => res.json());
    }
}
