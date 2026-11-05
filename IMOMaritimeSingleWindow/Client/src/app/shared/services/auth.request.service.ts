import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthRequest {
  GetHeaders() {
    return new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('auth_token')
    });
  }
}
