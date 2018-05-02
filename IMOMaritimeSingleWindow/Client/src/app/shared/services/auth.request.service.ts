import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BaseRequest } from "../utils/base.request";
import { ConfigService } from "../utils/config.service";

@Injectable()
export class AuthRequest {

    constructor(
        private http: Http
    ) {
    }

    GetHeaders() {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
        return headers;
    }

}