import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BehaviorSubject, Observable } from "rxjs";
import { SearchService } from "./search.service";
import { ShipContactModel } from "../models/ship-contact-model";

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
    private registerShipUrl: string;
    private flagCodeSearchUrl: string;
    private getContactListForShipUrl: string;
    private saveShipContactListUrl: string;

    constructor(private http: Http) {
        this.searchService = new SearchService(http);
        this.shipSearchUrl = 'api/ship/search';
        this.shipTypeUrl = 'api/shiptype/getall';
        this.hullTypeUrl = 'api/shiphulltype/getall';
        this.lengthTypeUrl = 'api/shiplengthtype/getall';
        this.breadthTypeUrl = 'api/shipbreadthtype/getall';
        this.powerTypeUrl = 'api/shippowertype/getall';
        this.shipSourceUrl = 'api/shipsource/getall';
        this.registerShipUrl = 'api/ship/register';
        this.flagCodeSearchUrl = 'api/shipflagcode/search';
        this.getContactListForShipUrl = 'api/shipcontact/ship';
        this.saveShipContactListUrl = 'api/shipcontact/savelist'
    }



    private organizationDataSource = new BehaviorSubject<any>(null);
    organizationData$ = this.organizationDataSource.asObservable();

    private countryDataSource = new BehaviorSubject<any>(null);
    countryData$ = this.countryDataSource.asObservable();

    private shipFlagCodeDataSource = new BehaviorSubject<any>(null);
    shipFlagCodeData$ = this.shipFlagCodeDataSource.asObservable();

    registerShip(newShip: any) {
        return this.http.post(this.registerShipUrl, newShip)
            .map(res => res.json());
    }

    saveShipContactList(shipContactList: ShipContactModel[]) {
        return this.http.post(this.saveShipContactListUrl, shipContactList).map(
            res => {
                return res.json();
            }).catch(e => {
                return Observable.of(e);
            });
    }

    setOrganizationData(data) {
        this.organizationDataSource.next(data);
    }

    setCountryData(data) {
        this.countryDataSource.next(data);
    }

    setShipFlagCodeData(data) {
        this.shipFlagCodeDataSource.next(data);
        console.log(data);
    }

    searchShip(term: string) {
        return this.searchService.search(this.shipSearchUrl, term);
    }

    searchFlagCode(term: string) {
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

    getContactList(shipId: number) {
        let uri: string = [this.getContactListForShipUrl, shipId].join('/');
        return this.http.get(uri)
            .map(res => res.json());
    }



}