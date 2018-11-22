import { Attribute, Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector:
    // tslint:disable-next-line:directive-selector
    '[numberValidator][formControlName],[numberValidator][formControl],[numberValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NumberValidator),
      multi: true
    }
  ]
})
export class NumberValidator implements Validator {
  constructor() {}

  validate(c: AbstractControl): { [key: string]: any } {
    if (c.value !== undefined && c.value === null) {
      return { notNumberError: true };
    }

    return null;
  }
}
