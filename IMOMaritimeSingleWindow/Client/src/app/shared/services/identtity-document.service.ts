
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class IdentityDocumentService {
    private identityDocumentUrl: string;
    private identityDocumentListUrl: string;
    private identityDocTypeUrl: string;

    constructor(private http: Http) {
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
        return this.http.get(uri).map(res => res.json());
    }

    updateIdentityDocumentList(identityDocumentList: any[]) {
        const uri = this.identityDocumentListUrl;
        return this.http.put(uri, identityDocumentList).map(res => {
          res.json();
          if (res.status === 200) {
          }
        });
    }

    getIdentityDocumentTypes() {
        const uri = this.identityDocTypeUrl;
        return this.http.get(uri).map(res => res.json());
      }

}

