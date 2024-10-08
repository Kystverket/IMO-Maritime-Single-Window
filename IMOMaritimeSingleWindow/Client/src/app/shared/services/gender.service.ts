import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenderModel } from 'app/shared/models/gender-model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GenderService {

    private genderUrl: string;

    constructor(private http: Http) {
        this.genderUrl = 'api/gender';
    }

    private genderDataSource = new BehaviorSubject<GenderModel>(null);
    genderData$ = this.genderDataSource.asObservable();

    setGenderData(data: GenderModel) {
        this.genderDataSource.next(data);
    }

    // Http
    getGenders() {
        const uri = this.genderUrl;
        return this.http.get(uri).map(res => res.json());
    }
}
