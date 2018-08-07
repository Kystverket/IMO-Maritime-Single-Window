import { RequestOptions } from '@angular/http';
import { AuthRequest } from '../services/auth.request.service';
import { BaseService } from '../services/base.service';
import { ConfigService } from './config.service';

export abstract class BaseRequest extends BaseService {
  protected baseUrl: string;

  constructor(
    private configService: ConfigService,
    private authRequestService: AuthRequest
  ) {
    super();
    this.baseUrl = this.configService.getApiURI();
  }

  getRequestOptions() {
    const headers = this.authRequestService.GetHeaders();
    const requestOptions = new RequestOptions({ headers: headers });
    return requestOptions;
  }
}
