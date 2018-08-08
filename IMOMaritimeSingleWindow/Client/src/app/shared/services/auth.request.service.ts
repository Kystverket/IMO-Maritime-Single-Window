import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AuthRequest {
  constructor(private http: Http) { }

  GetHeaders() {
    const headers = new Headers();
    headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('auth_token')
    );
    return headers;
  }
}
