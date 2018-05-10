import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { AuthRequest } from './auth.request.service';

@Injectable()
export class PortCallOverviewService {
    constructor(private http: Http, private authRequestService: AuthRequest) {
        this.getOverviewUrl = 'api/portcall/overview';
        this.getPortCallsByLocationUrl = 'api/portcall/location';
        this.getPortCallsUrl = 'api/portcall/get';
        this.getPortCallsForUserUrl = 'api/portcall/foruser';
    }
    private getPortCallsUrl: string;
    private getPortCallsForUserUrl: string;
    private getOverviewUrl: string;
    private getPortCallsByLocationUrl: string;

    private overviewDataSource = new BehaviorSubject<any>(null);
    overviewData$ = this.overviewDataSource.asObservable();
    setOverviewData(data) {
        this.overviewDataSource.next(data);
    }

    private draftOverviewDataSource = new BehaviorSubject<any>(null);
    draftOverviewData$ = this.draftOverviewDataSource.asObservable();
    setDraftData(data) {
        this.draftOverviewDataSource.next(data);
    }

    private portCallDataSource = new BehaviorSubject<any>(null);
    portCallData$ = this.portCallDataSource.asObservable();

    getOverview(portCallId: number) {
        let uri: string = [this.getOverviewUrl, portCallId].join('/');
        return this.http.get(uri)
            .map(res => res.json());
    }

    setPortCallData(data) {
        this.portCallDataSource.next(data);
    }

    getPortCallsByLocation(locationId: number) {
        let uri: string = [this.getPortCallsByLocationUrl, locationId].join('/');
        return this.http.get(uri)
            .map(res => res.json());
    }

    getPortCalls() {
        // let uri: string = this.getPortCallsUrl;
        let auth_headers = this.authRequestService.GetHeaders();
        let options = new RequestOptions({ headers: auth_headers });
        let uri: string = this.getPortCallsForUserUrl;
        return this.http.get(uri, options)
            .map(res => res.json());
    }

    getOverviews() {
        let uri: string = this.getOverviewUrl;
        return this.http.get(uri)
            .map(res => res.json());
    }
}