import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DpgTypeModel } from 'app/shared/models/dpg-type-model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DpgTypeService {
    private dpgTypeUrl: string;

    constructor(private http: Http) {
        this.dpgTypeUrl = 'api/dpgType';
    }

    private dpgTypeSource = new BehaviorSubject<DpgTypeModel>(null);

    // Http
    getDpgTypes() {
        const uri = this.dpgTypeUrl;
        return this.http.get(uri).map(res => res.json());
    }
}
