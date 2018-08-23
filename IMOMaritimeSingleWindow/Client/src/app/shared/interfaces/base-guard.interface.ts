import { HttpErrorResponse } from '@angular/common/http';

export interface BaseGuard {
    navigateByError(error: HttpErrorResponse | any): void;
}
