import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { of } from "rxjs/observable/of";
import { SearchService } from "./search.service";
import { OrganizationModel } from "../models/organization-model";

@Injectable()
export class OrganizationService {
    constructor(private http: Http) {
        this.searchService = new SearchService(http);
        this.searchUrl = 'api/organization/search';
        this.registerOrganizationUrl = 'api/organization/register';
        this.getOrganizationTypesUrl = 'api/organizationtype/getall';
    }

    private searchService: SearchService;
    private searchUrl: string;
    private registerOrganizationUrl: string;
    private getOrganizationTypesUrl: string;

    public registerOrganization(newOrganization: OrganizationModel) {
        return this.http.post(this.registerOrganizationUrl, newOrganization)
            .map(res => res.json()).subscribe(
                orgData => {
                    console.log(orgData);
                }
            );
    }


    public search(term: string) {
        return this.searchService.search(this.searchUrl, term);
    }

    public getOrganizationTypes() {
        return this.http.get(this.getOrganizationTypesUrl)
            .map(res => res.json());
    }

}