import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { of } from "rxjs/observable/of";
import { SearchService } from "./search.service";
import { LocationModel } from "../models/location-model";

@Injectable()
export class LocationService {
    constructor(private http: Http) {
        this.searchService = new SearchService(http);
        this.searchUrl = 'api/location/search/';
        this.registerLocationUrl = 'api/location/register';
        this.getLocationTypesUrl = 'api/locationtype/getall';
        this.getCountriesUrl = 'api/country/getall';
    }

    private searchService: SearchService;
    private searchUrl: string;
    private registerLocationUrl: string;
    private getLocationTypesUrl: string;
    private getCountriesUrl: string;

    public search(term: string) {
        return this.searchService.search(this.searchUrl, term);
    }

    public registerLocation(newLocation: LocationModel) {
        return this.http.post(this.registerLocationUrl, newLocation)
                .map(res => res.json()).subscribe(
                    locData => {
                        console.log(locData);
                    }
                );
    }

    public getLocationTypes() {
        return this.http.get(this.getLocationTypesUrl)
                .map(res => res.json());
    }

    public getCountries() {
        return this.http.get(this.getCountriesUrl)
                .map(res => res.json());
    }
}