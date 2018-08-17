import { Directive, forwardRef } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector:
    // tslint:disable-next-line:directive-selector
    '[alphaNumericValidator][formControlName],[alphaNumericValidator][formControl],[alphaNumericValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AlphaNumericValidator),
      multi: true
    }
  ]
})
export class AlphaNumericValidator implements Validator {
  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } {
    if (control.value && !/^[a-åA-Å0-9!?@#$&()`.+,/"_ -]*$/i.test(control.value)) {
        return { invalidAlphaNumeric: true };
    }
    return null;
  }
}
