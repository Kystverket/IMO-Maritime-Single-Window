import { ConfigService } from "./config.service";
import { BaseService } from "../services/base.service";

export abstract class BaseRequest extends BaseService {

    protected baseUrl: string;
    
    constructor(private configService: ConfigService) {
        super();
        this.baseUrl = this.configService.getApiURI();
    }
}