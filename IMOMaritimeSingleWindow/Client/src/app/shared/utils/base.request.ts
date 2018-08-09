import { BaseService } from 'app/shared/services/base.service';
import { ConfigService } from './config.service';

export abstract class BaseRequest extends BaseService {
  protected baseUrl: string;

  constructor(
    private configService: ConfigService
  ) {
    super();
    this.baseUrl = this.configService.getApiURI();
  }
}
