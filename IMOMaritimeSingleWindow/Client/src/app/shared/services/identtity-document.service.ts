
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from '../interfaces/form-meta-data.interface';
import { Http } from '@angular/http';
import { PersonOnBoardModel } from '../models/person-on-board-model';

@Injectable()
export class IdentityDocumentService {
    private identityDocumentUrl: string;
    private identityDocumentListUrl: string;

    constructor(private http: Http) {
        this.identityDocumentListUrl = 'api/identitydocument/list';
        this.identityDocumentUrl = 'api/identitydocument';
    }

    private identityDocumentList = new BehaviorSubject<any>(null);
    identityDocumentList$ = this.identityDocumentList.asObservable();

    setIdentityDocumentList(data) {
        this.identityDocumentList.next(data);
    }

    getIdentityDocumentById(id: number) {
        const uri = [this.identityDocumentUrl, id].join('/');
        console.log(uri);
        return this.http.get(uri).map(res => res.json());
    }

    updateIdentityDocumentList(identityDocumentList: any[]) {
        console.log('Updating identity documents for passengers...');
        const uri = this.identityDocumentListUrl;
        return this.http.put(uri, identityDocumentList).map(res => {
          res.json();
          if (res.status === 200) {
            console.log('Identity documents for passengers successfully saved.');
          }
        });
    }

    getIdentityDocumentByPersonOnBoardId(personOnBoardId: number) {
    }
}

