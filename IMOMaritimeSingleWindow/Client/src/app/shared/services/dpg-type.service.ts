import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DpgTypeModel } from 'app/shared/models/dpg-type-model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DpgTypeService {
    private dpgTypeUrl: string;

    constructor(private http: HttpClient) {
        this.dpgTypeUrl = 'api/dpgType';
    }

    private dpgTypeSource = new BehaviorSubject<DpgTypeModel>(null);

    // Http
    getDpgTypes() {
        const uri = this.dpgTypeUrl;
        return this.http.get<any>(uri);
    }
}
