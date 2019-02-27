import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class FileService {
    private overviewUrl: string;

    constructor(
        private httpClient: HttpClient,
    ) {
    }

    uploadPaxFile(formData: FormData, portCallId: number): Observable<any> {
        const uri = 'api/file/passengers/' + portCallId;
        return this.httpClient.post(uri, formData);
    }

    uploadCrewFile(formData: FormData, portCallId: number): Observable<any> {
        const uri = 'api/file/crew/' + portCallId;
        return this.httpClient.post(uri, formData);
    }

    uploadCrewAndPax(formData: FormData, portCallId: number): Observable<any> {
        const uri = 'api/file/crewpax/' + portCallId;
        return this.httpClient.post(uri, formData);
    }

    uploadShipStores(formData: FormData, portCallId: number): Observable<any> {
        const uri = 'api/file/shipStores/' + portCallId;
        return this.httpClient.post(uri, formData);
    }

    getClearanceCertificate(url: string) {
        const uri = 'api/file/' + url;
        window.open(uri);
    }

    getClearanceCertificateToken(portCallId: number): Observable<any> {
        const uri = 'api/file/CertificateOfClearanceToken/' + portCallId;
        return this.httpClient.get(uri);
    }
}
