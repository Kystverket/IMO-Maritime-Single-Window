import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from "../shared/utils/config.service";
import { AuthRequest } from "../shared/services/auth.request.service";
import { BaseRequest } from "../shared/utils/base.request";

@Injectable()
export class MenuService extends BaseRequest {
    private menuBaseUrl : string;
    private actionUrl: string;

    constructor(
        private http: Http,
        private authRequestService: AuthRequest,
        configService: ConfigService
    ) {
        super(configService);
        
        this.menuBaseUrl = "/menu";
        this.actionUrl = this.baseUrl + this.menuBaseUrl;
    }

    getMenuEntries() {
        var auth_headers = this.authRequestService.GetHeaders();
        let url : string = `${this.actionUrl}/menuEntries`;
        let options = new RequestOptions({ headers: auth_headers })
        return this.http
            .get(url, options)
            .map(res => res.json());
    }

}