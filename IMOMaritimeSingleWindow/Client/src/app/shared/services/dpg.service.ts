import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchService } from 'app/shared/services/search.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DpgOnBoardModel } from '../models';


@Injectable()
export class DpgService {
    private dpgTypeUrl: string;
    private dpgUrl: string;
    private searchUrl: string;
    private dpgOnBoardUrl: string;
    private dpgOnBoardByPortCallUrl: string;
    private measurementTypeFilterUrl: string;
    private searchService: SearchService;
    private overviewUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.searchService = new SearchService(this.http);
        this.dpgTypeUrl = 'api/dpgType';
        this.dpgUrl = 'api/dpg';
        this.searchUrl = 'api/dpg/search';
        this.dpgOnBoardUrl = 'api/dpgOnBoard';
        this.dpgOnBoardByPortCallUrl = 'api/dpgOnBoard/portcall';
        this.measurementTypeFilterUrl = 'api/measurementType/filter';
        this.overviewUrl = 'overviewByPortCall';
    }

    private dpgOnBoardSource = new BehaviorSubject<DpgOnBoardModel[]>(null);
    dpgOnBoardList$ = this.dpgOnBoardSource.asObservable();

    private dataIsPristine = new BehaviorSubject<boolean>(true);
    dataIsPristine$ = this.dataIsPristine.asObservable();

    private dpgIsChecked = new BehaviorSubject<boolean>(false);
    dpgIsChecked$ = this.dpgIsChecked.asObservable();

    setDpgOnBoardList(data) {
        this.dpgOnBoardSource.next(data);
    }

    setDataIsPristineTrue() {
        this.dataIsPristine.next(true);
    }

    setDataIsPristineFalse() {
        this.dataIsPristine.next(false);
    }

    setDpgCheckedInProgressBar(checked: boolean) {
        this.dpgIsChecked.next(checked);
    }
    // Http
    getDpgOnBoardOverviewByPortCall(portCallId: number) {
        const uri = [this.dpgOnBoardUrl, this.overviewUrl, portCallId].join('/');
        return this.http.get<any>(uri);
    }

    getDpgTypes() {
        const uri = this.dpgTypeUrl + '/all';
        return this.http.get<any>(uri);
    }

    getDpgById(DpgId: number) {
        const uri = [this.dpgUrl, DpgId].join('/');
        return this.http.get<any>(uri);
    }

    getDpgOnBoardListByPortCallId(portCallId: number) {
        const uri = [this.dpgOnBoardByPortCallUrl, portCallId].join('/');
        return this.http.get<any>(uri);
    }

    getMeasurementTypeList(filter: string) {
        const uri = this.measurementTypeFilterUrl;
        return this.http.get<any>(uri);
    }

    search(dpgType: number, term: string, amount = 10) {
        if (term.length < 2) {
            return of([]);
        }
        return this.searchService.search(this.searchUrl, term, amount, dpgType);
    }

    saveDpgOnBoard(dpgOnBoardList: any[], portCallId: number) {
        const uri = [this.dpgOnBoardUrl, portCallId, 'list'].join('/');
        return this.http.put<any>(uri, dpgOnBoardList);
    }

    formatDpgOnBoard(dpgOnBoardList: DpgOnBoardModel[], portCallId: number): DpgOnBoardModel[] {
        let formattedList: DpgOnBoardModel[] = [];
        if (dpgOnBoardList && dpgOnBoardList.length > 0) {
            formattedList = dpgOnBoardList.map(
                item => {
                    const formattedDpg = new DpgOnBoardModel();
                    formattedDpg.portCallId = portCallId;
                    formattedDpg.dpgId = item.dpgId;
                    formattedDpg.dpgOnBoardId = item.dpgOnBoardId;
                    formattedDpg.grossWeight = item.grossWeight;
                    formattedDpg.locationOnBoard = item.locationOnBoard;
                    formattedDpg.netWeight = item.netWeight;
                    formattedDpg.placedInContainer = item.placedInContainer;
                    formattedDpg.transportUnitIdentification = item.transportUnitIdentification;
                    formattedDpg.measurementTypeId = item.measurementTypeId;
                    return formattedDpg;
                }
            );
        }
        return formattedList;
    }
}
