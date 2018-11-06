import { Attribute, Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector:
    // tslint:disable-next-line:directive-selector
    '[integerValidator][formControlName],[integerValidator][formControl],[integerValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IntegerValidator),
      multi: true
    }
  ]
})
export class IntegerValidator implements Validator {
  constructor() {}

  validate(c: AbstractControl): { [key: string]: any } {
    if (
      c.value !== undefined &&
      (isNaN(c.value) || c.value - Math.floor(c.value) !== 0)
    ) {
      return { notIntegerError: true };
    }

    return null;
  }
}
