import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[positiveNumberValidator][formControlName],[positiveNumberValidator][formControl],[positiveNumberValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PositiveNumberValidator), multi: true }
  ]
})
export class PositiveNumberValidator implements Validator {

  constructor() { }
  
  validate(c: AbstractControl): { [key: string]: any } {
    if (c.value !== undefined && (isNaN(c.value) || c.value < 0 )) {
      return { 'notPositiveNumberError': true }
    }
    
    return null;
  }

}
