import { Injectable } from '@angular/core';
import { BrowserXhr, Request, Response, ResponseOptions, XHRBackend, XSRFStrategy } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

// Nicolas Henneaux - edited Dec 4 '17 at 20:54
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
@Injectable()
export class AuthenticateXHRBackend extends XHRBackend {

    constructor(
        _browserXhr: BrowserXhr,
        _baseResponseOptions: ResponseOptions,
        _xsrfStrategy: XSRFStrategy
    ) {
        super(_browserXhr, _baseResponseOptions, _xsrfStrategy);
    }

    createConnection(request: Request) {
        const xhrConnection = super.createConnection(request);
        xhrConnection.response = xhrConnection.response.catch((error: Response) => {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {

                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                localStorage.removeItem('user_claims');
                const loc = window.location;
                const baseUrl = loc.protocol + '//' + loc.hostname + (loc.port ? (':' + loc.port) : '') + '/';
                window.location.href = baseUrl + '?' + new Date().getMilliseconds();
                // window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return Observable.throw(error);
        });
        return xhrConnection;
    }
}
