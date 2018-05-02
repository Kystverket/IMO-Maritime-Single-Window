import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { of } from "rxjs/observable/of";
import { SearchService } from "./search.service";

@Injectable()
export class LocationService {
    constructor(private http: Http) {
        this.searchService = new SearchService(http);
        this.searchUrl = 'api/location/search/';
        this.getLocationTypesUrl = 'api/locationtype/getall';
    }

    private searchService: SearchService;
    private searchUrl: string;
    private getLocationTypesUrl: string;

    public search(term: string) {
        return this.searchService.search(this.searchUrl, term);
    }

    public getLocationTypes() {
        return this.http.get(this.getLocationTypesUrl)
                .map(res => res.json());
    }
}