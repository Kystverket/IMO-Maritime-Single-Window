import { Injectable } from '../../../../node_modules/@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { BehaviorSubject, Observable } from '../../../../node_modules/rxjs';
import { ConsignmentModel } from 'app/shared/models/consignment-model';
import { PackageTypeModel } from 'app/shared/models/package-type-model';

@Injectable()
export class FalCargoService {

    private portCallUrl: string;
    private consignmentsString: string;
    private packageTypeUrl: string;

    constructor(private http: HttpClient) {
        this.portCallUrl = 'api/portCall';
        this.consignmentsString = 'consignments';
        this.packageTypeUrl = 'api/packageType';
    }

    private consignmentListSource = new BehaviorSubject<ConsignmentModel[]>(null);
    consignmentListData$ = this.consignmentListSource.asObservable();

    private dataIsPristineSource = new BehaviorSubject<boolean>(true);
    dataIsPristine$ = this.dataIsPristineSource.asObservable();

    setDataIsPristine(data: boolean) {
        this.dataIsPristineSource.next(data);
    }

    setConsignmentListData(data: ConsignmentModel[]) {
        this.consignmentListSource.next(data);
    }

    getConsignmentListForPortCall(portCallId: number): Observable<ConsignmentModel[]> {
        const uri = [this.portCallUrl, portCallId, this.consignmentsString].join('/');
        return this.http.get<ConsignmentModel[]>(uri);
    }

    saveConsignmentListForPortCall(consignmentList: ConsignmentModel[], portCallId: number) {
        const uri = [this.portCallUrl, portCallId, this.consignmentsString].join('/');
        return this.http.put(uri, consignmentList);
    }

    getPackageTypeList(): Observable<PackageTypeModel[]> {
        const uri = this.packageTypeUrl;
        return this.http.get<PackageTypeModel[]>(uri);
    }
}
