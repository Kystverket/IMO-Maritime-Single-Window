import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { of } from "rxjs/observable/of";
import { BehaviorSubject, Subject } from 'rxjs';
import { ShipModel } from "../../dashboard/basis-data/ship/ship-model";

@Injectable()
export class ShipService {
    constructor(private http: Http) {
        this.actionUrl = 'api/ship/search/';
        this.shipTypeUrl = 'api/shiptype/getall';
        this.hullTypeUrl = 'api/shiphulltype/getall';
        this.lengthTypeUrl = 'api/shiplengthtype/getall';
        this.breadthTypeUrl = 'api/shipbreadthtype/getall';
        this.powerTypeUrl = 'api/shippowertype/getall';
        this.shipSourceUrl = 'api/shipsource/getall';
        this.registerShipUrl = 'api/ship/register';
    }

    private actionUrl: string;
    private shipTypeUrl: string;
    private hullTypeUrl: string;
    private lengthTypeUrl: string;
    private breadthTypeUrl: string;
    private powerTypeUrl: string;
    private shipSourceUrl: string;
    private registerShipUrl: string;

    private companyDataSource = new BehaviorSubject<any>(null);
    companyData$ = this.companyDataSource.asObservable();

    private countryDataSource = new BehaviorSubject<any>(null);
    countryData$ = this.countryDataSource.asObservable();

    private shipFlagCodeDataSource = new BehaviorSubject<any>(null);
    shipFlagCodeData$ = this.shipFlagCodeDataSource.asObservable();

    registerShip(newShip: any) {
        console.log(newShip);
        return this.http.post(this.registerShipUrl, newShip)
                .map(res => res.json());
    }    

    setCompanyData(data) {
        this.companyDataSource.next(data);
    }

    setCountryData(data) {
        this.countryDataSource.next(data);
    }

    setShipFlagCodeData(data) {
        this.shipFlagCodeDataSource.next(data);
        console.log(data);
    }

    public search(term: string) {
        if (term === '') {
            return of([]);
        }

        return this.http.get(this.actionUrl + term)
            .map(res => res.json())
            .toPromise();
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
    
}