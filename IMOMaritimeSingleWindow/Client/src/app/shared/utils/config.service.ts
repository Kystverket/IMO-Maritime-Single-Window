// Based on https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/src/app/shared/utils/config.service.ts

import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  _apiURI: string;

  constructor() {
    this._apiURI = 'api';
  }

  getApiURI() {
    return this._apiURI;
  }
}
