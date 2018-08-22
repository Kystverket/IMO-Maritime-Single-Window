import { NgModule } from '@angular/core';
import { IntegerValidator } from './integer-validator.directive';
import { NumberValidator } from './number-validator.directive';
import { PositiveNumberValidator } from './positive-number-validator.directive';
import { AlphaNumericValidator } from './alpha-numeric-validator.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    IntegerValidator,
    NumberValidator,
    PositiveNumberValidator,
    AlphaNumericValidator
  ],
  exports: [
    IntegerValidator,
    NumberValidator,
    PositiveNumberValidator,
    AlphaNumericValidator
  ]
})

export class CustomValidatorsModule { }
