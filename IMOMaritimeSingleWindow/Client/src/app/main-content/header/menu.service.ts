import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { AuthRequest } from "../../shared/services/auth.request.service";
import { BaseRequest } from "../../shared/utils/base.request";
import { ConfigService } from "../../shared/utils/config.service";

@Injectable()
export class MenuService extends BaseRequest {
    private menuBaseUrl: string;
    private actionUrl: string;

    constructor(
        private http: Http,
        authRequestService: AuthRequest,
        configService: ConfigService
    ) {
        super(configService, authRequestService);

        this.menuBaseUrl = "/menu";
        this.actionUrl = this.baseUrl + this.menuBaseUrl;
    }

    getMenuEntries() {
        let url: string = `${this.actionUrl}/entries`;
        return this.http
            .get(url, this.getRequestOptions())
            .map(res => res.json());
    }

}