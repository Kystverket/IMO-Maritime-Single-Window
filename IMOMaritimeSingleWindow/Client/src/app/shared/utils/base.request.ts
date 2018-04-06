import { ConfigService } from "./config.service";

export abstract class BaseRequest{

    protected baseUrl: string;
    
    constructor(private configService: ConfigService) {
        this.baseUrl = this.configService.getApiURI();
    }
}