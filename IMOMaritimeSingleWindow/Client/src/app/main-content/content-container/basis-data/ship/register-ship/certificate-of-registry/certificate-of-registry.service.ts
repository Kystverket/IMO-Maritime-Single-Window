import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CertificateOfRegistryModel } from 'app/shared/models/certificate-of-registry-model';
import { Http } from '@angular/http';
import { LocationModel } from 'app/shared/models/location-model';

@Injectable()
export class CertificateOfRegistryService {

    private certificateUrl: string;

    constructor(private http: Http) {
        this.certificateUrl = 'api/certificateOfRegistry';
    }

    private certificateDataSource = new BehaviorSubject<CertificateOfRegistryModel>(null);
    certificateData$ = this.certificateDataSource.asObservable();

    private validDateFormatDataSource = new BehaviorSubject<boolean>(null);
    validDateFormatData$ = this.validDateFormatDataSource.asObservable();

    setCertificateData(data: any) {
        this.certificateDataSource.next(data);
    }

    setValidDateFormatData(data: boolean) {
        this.validDateFormatDataSource.next(data);
    }

    // Http

    addCertificateOfRegistry(certificate: CertificateOfRegistryModel) {
        const uri = this.certificateUrl;
        return this.http.post(uri, certificate).map(res => res.json());
    }

    updateCertificateOfRegistry(certificate: CertificateOfRegistryModel) {
        const uri = this.certificateUrl;
        return this.http.put(uri, certificate).map(res => res.json());
    }

}
