import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { BaseRequest } from '../utils/base.request';
import { ConfigService } from '../utils/config.service';
import { AuthRequest } from './auth.request.service';

@Injectable()
export class PortCallOverviewService extends BaseRequest {
    constructor(private http: Http,
        authRequestService: AuthRequest,
        configService: ConfigService) {
        super(configService, authRequestService);
        this.portCallUrl = "api/portcall";
        this.overviewUrl = this.portCallUrl + "/overview";
        this.portCallUserUrl = this.portCallUrl + "/user";
    }
    private portCallUrl: string;
    private portCallUserUrl: string;
    private overviewUrl: string;

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

    private clearedByUserAgencyDataSource = new BehaviorSubject<any>(null);
    clearedByUserAgencyOverviewData$ = this.clearedByUserAgencyDataSource.asObservable();
    setClearedData(data) {
        this.clearedByUserAgencyDataSource.next(data);
    }

    private portCallDataSource = new BehaviorSubject<any>(null);
    portCallData$ = this.portCallDataSource.asObservable();

    getOverview(portCallId: number) {
        let uri: string = [this.overviewUrl, portCallId].join('/');
        return this.http.get(uri)
            .map(res => res.json());
    }

    setPortCallData(data) {
        this.portCallDataSource.next(data);
    }

    getPortCalls() {
        let options = this.getRequestOptions();
        let uri = this.portCallUserUrl;
        return this.http.get(uri, options)
            .map(res => res.json());
    }

    getOverviews() {
        let uri = this.overviewUrl;
        return this.http.get(uri)
            .map(res => res.json());
    }
}