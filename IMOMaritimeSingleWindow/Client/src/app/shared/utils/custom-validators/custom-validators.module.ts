import { NgModule } from '@angular/core';
import { ExtendedAlphaNumericValidator } from './extended-alpha-numeric-validator.directive';
import { IntegerValidator } from './integer-validator.directive';
import { NumberValidator } from './number-validator.directive';
import { PositiveNumberValidator } from './positive-number-validator.directive';

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
