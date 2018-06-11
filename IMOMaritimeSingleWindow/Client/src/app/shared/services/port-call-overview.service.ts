import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseRequest } from '../utils/base.request';
import { ConfigService } from '../utils/config.service';
import { AuthRequest } from './auth.request.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PortCallOverviewService extends BaseRequest {
    private portCallUrl: string;
    private portCallUserUrl: string;
    private overviewUrl: string;

    private overviewDataSource = new BehaviorSubject<any>(null);
    overviewData$ = this.overviewDataSource.asObservable();

    private draftOverviewDataSource = new BehaviorSubject<any>(null);
    draftOverviewData$ = this.draftOverviewDataSource.asObservable();

    private clearedByUserAgencyDataSource = new BehaviorSubject<any>(null);
    clearedByUserAgencyOverviewData$ = this.clearedByUserAgencyDataSource.asObservable();

    private portCallDataSource = new BehaviorSubject<any>(null);
    portCallData$ = this.portCallDataSource.asObservable();

    constructor(
        private http: Http,
        authRequestService: AuthRequest,
        configService: ConfigService
    ) {
        super(configService, authRequestService);
        this.portCallUrl = 'api/portcall';
        this.overviewUrl = this.portCallUrl + '/overview';
        this.portCallUserUrl = this.portCallUrl + '/user';
    }

    setOverviewData(data) {
        this.overviewDataSource.next(data);
    }

    setDraftData(data) {
        this.draftOverviewDataSource.next(data);
    }

    setClearedData(data) {
        this.clearedByUserAgencyDataSource.next(data);
    }

    getOverview(portCallId: number) {
        const uri: string = [this.overviewUrl, portCallId].join('/');
        return this.http.get(uri).map(res => res.json());
    }

    setPortCallData(data) {
        this.portCallDataSource.next(data);
    }

    getPortCalls() {
        const options = this.getRequestOptions();
        const uri = this.portCallUserUrl;
        return this.http.get(uri, options).map(res => res.json());
    }

    getOverviews() {
        const uri = this.overviewUrl;
        return this.http.get(uri).map(res => res.json());
    }
}
