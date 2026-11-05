import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenderModel } from 'app/shared/models/gender-model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class GenderService {

    private genderUrl: string;

    constructor(private http: HttpClient) {
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
        return this.http.get<any>(uri);
    }
}
