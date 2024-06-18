import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRequest } from 'app/shared/utils/base.request';
import { ConfigService } from 'app/shared/utils/config.service';
import { BehaviorSubject ,  Observable } from 'rxjs';
import { AuthRequest } from './auth.request.service';

@Injectable()
export class PortCallOverviewService extends BaseRequest {

    private portCallUrl: string;
    private portCallUserUrl: string;
    private partialOverviewUrl: string;
    private overviewByUserUrl: string;
    private overviewUrl: string;

    private overviewDataSource = new BehaviorSubject<any>(null);
    overviewData$ = this.overviewDataSource.asObservable();

    private draftOverviewDataSource = new BehaviorSubject<any>(null);
    draftOverviewData$ = this.draftOverviewDataSource.asObservable();

    private showCancelledPortCallsSource = new BehaviorSubject<boolean>(false);
    showCancelledPortCalls$ = this.showCancelledPortCallsSource.asObservable();

    private showCompletedPortCallsSource = new BehaviorSubject<boolean>(false);
    showCompletedPortCalls$ = this.showCompletedPortCallsSource.asObservable();

    private clearedByUserAgencyDataSource = new BehaviorSubject<any>(null);
    clearedByUserAgencyOverviewData$ = this.clearedByUserAgencyDataSource.asObservable();

    private portCallDataSource = new BehaviorSubject<any>(null);
    portCallData$ = this.portCallDataSource.asObservable();

    private loadingPortCallSource = new BehaviorSubject<boolean>(false);
    loadingPortCall$ = this.loadingPortCallSource.asObservable();

    constructor(
        private http: HttpClient,
        configService: ConfigService
    ) {
        super(configService);
        this.portCallUrl = 'api/portcall';
        this.partialOverviewUrl = this.portCallUrl + '/partialOverview';
        this.portCallUserUrl = this.portCallUrl + '/user';
        this.overviewByUserUrl = this.portCallUrl + '/user/overview';
        this.overviewUrl = this.portCallUrl + '/overview';
    }

    setLoadingPortCall(data: boolean) {
        this.loadingPortCallSource.next(data);
    }

    setOverviewData(data) {
        this.overviewDataSource.next(data);
    }

    setDraftData(data) {
        this.draftOverviewDataSource.next(data);
    }

    setShowCancelledPortCalls(showCancelled) {
        this.showCancelledPortCallsSource.next(showCancelled);
    }

    setShowCompletedPortCalls(showCompleted) {
        this.showCompletedPortCallsSource.next(showCompleted);
    }

    setClearedData(data) {
        this.clearedByUserAgencyDataSource.next(data);
    }

    getPartialOverview(portCallId: number): Observable<any> {
        const uri: string = [this.partialOverviewUrl, portCallId].join('/');
        return this.http.get(uri);
    }

    getOverview(portCallId: number): Observable<any> {
        const uri: string = [this.overviewUrl, portCallId].join('/');
        return this.http.get(uri);
    }

    setPortCallData(data) {
        this.portCallDataSource.next(data);
    }

    getPortCalls(): Observable<any> {
        const uri = this.portCallUserUrl;
        return this.http.get(uri);
    }

    getOverviewsByUser(): Observable<any[]> {
        const uri = this.overviewByUserUrl;
        return this.http.get<any[]>(uri);
    }
}
