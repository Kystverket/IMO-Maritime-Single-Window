import { NgModule } from '@angular/core';
import { IntegerValidator } from './integer-validator.directive';
import { NumberValidator } from './number-validator.directive';
import { PositiveNumberValidator } from './positive-number-validator.directive';
import { ExtendedAlphaNumericValidator } from './extended-alpha-numeric-validator.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    IntegerValidator,
    NumberValidator,
    PositiveNumberValidator,
    ExtendedAlphaNumericValidator
  ],
  exports: [
    IntegerValidator,
    NumberValidator,
    PositiveNumberValidator,
    ExtendedAlphaNumericValidator
  ]
})

export class CustomValidatorsModule { }
