
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class IdentityDocumentService {
    private identityDocumentUrl: string;
    private identityDocumentListUrl: string;
    private identityDocTypeUrl: string;

    constructor(private http: HttpClient) {
        this.identityDocumentListUrl = 'api/identitydocument/list';
        this.identityDocumentUrl = 'api/identitydocument';
        this.identityDocTypeUrl = 'api/identitydocumenttype';
    }

    private identityDocumentList = new BehaviorSubject<any>(null);
    identityDocumentList$ = this.identityDocumentList.asObservable();

    setIdentityDocumentList(data) {
        this.identityDocumentList.next(data);
    }

    getIdentityDocumentById(id: number) {
        const uri = [this.identityDocumentUrl, id].join('/');
        return this.http.get<any>(uri);
    }

    updateIdentityDocumentList(identityDocumentList: any[]) {
        const uri = this.identityDocumentListUrl;
        return this.http.put<any>(uri, identityDocumentList);
    }

    getIdentityDocumentTypes() {
        const uri = this.identityDocTypeUrl;
        return this.http.get<any>(uri);
      }

}

