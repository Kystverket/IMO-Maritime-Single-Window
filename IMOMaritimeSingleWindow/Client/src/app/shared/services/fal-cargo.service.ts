import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { CargoItemModel, ConsignmentModel, PackageTypeModel } from '../models/';

@Injectable()
export class FalCargoService {

    private portCallUrl: string;
    private consignmentsString: string;
    private packageTypeUrl: string;
    private overviewUrl: string;

    constructor(private http: HttpClient) {
        this.portCallUrl = 'api/portCall';
        this.consignmentsString = 'consignments';
        this.packageTypeUrl = 'api/packageType';
        this.overviewUrl = 'api/customsCargo/overviewByPortCall';
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

    getOverviewByPortCall(portCallId: number): Observable<any> {
        const uri = [this.overviewUrl, portCallId].join('/');
        return this.http.get<any>(uri);
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

    formatConsignment(consignmentList: ConsignmentModel[]): ConsignmentModel[] {
        let formattedList: ConsignmentModel[] = [];
        if (consignmentList && consignmentList.length > 0) {
            formattedList = consignmentList.map(entry => {
                const formattedConsignment = new ConsignmentModel();
                formattedConsignment.portCallId = entry.portCallId;
                formattedConsignment.name = entry.name;
                formattedConsignment.portOfLoadingId = entry.portOfLoadingId;
                formattedConsignment.portOfDischargeId = entry.portOfDischargeId;
                formattedConsignment.remark = entry.remark;
                if (entry.cargoItem && entry.cargoItem.length > 0) {
                    formattedConsignment.cargoItem = entry.cargoItem.map(item => {
                        const formattedCargoItem = new CargoItemModel();
                        formattedCargoItem.shippingMarks = item.shippingMarks;
                        formattedCargoItem.containerIdentification = item.containerIdentification;
                        formattedCargoItem.description = item.description;
                        formattedCargoItem.grossVolume = item.grossVolume;
                        formattedCargoItem.grossWeight = item.grossWeight;
                        formattedCargoItem.hsCode = item.hsCode;
                        formattedCargoItem.numberOfPackages = item.numberOfPackages;
                        formattedCargoItem.packageTypeId = item.packageTypeId;
                        return formattedCargoItem;
                    });
                }
                return formattedConsignment;
            });
        }
        return formattedList;
    }
}
