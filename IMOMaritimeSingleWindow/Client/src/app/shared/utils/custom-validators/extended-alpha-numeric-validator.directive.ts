import { Directive, forwardRef } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector:
    // tslint:disable-next-line:directive-selector
    '[extendedAlphanumericValidator][formControlName],[extendedAlphanumericValidator][formControl],[extendedAlphanumericValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ExtendedAlphaNumericValidator),
      multi: true
    }
  ]
})
export class ExtendedAlphaNumericValidator implements Validator {
  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } {
    if (control.value && !/^[a-åA-Å0-9 ]+$/i.test(control.value)) {
        return { invalidAlphaNumeric: true };
    }
    return null;
  }
}
