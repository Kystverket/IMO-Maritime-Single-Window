import { HttpClient } from '@angular/common/http';
import { FalSecurityModel } from 'app/shared/models/fal-security-model';

export class FalSecurityService {
  private falSecurityUrl = 'api/falSecurity';
  private portCallUrl = 'api/portCall';

  constructor(
    private http: HttpClient
  ) { }

  getFalSecurityByPortCallId(portCallId: number) {
    const uri = [this.portCallUrl, portCallId, 'falSecurity'].join('/');
    return this.http.get<FalSecurityModel>(uri);
  }

}
