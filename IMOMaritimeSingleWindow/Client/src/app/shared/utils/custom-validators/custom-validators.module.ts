import { NgModule } from '@angular/core';
import { IntegerValidator } from './integer-validator.directive';
import { NumberValidator } from './number-validator.directive';
import { PositiveNumberValidator } from './positive-number-validator.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    IntegerValidator,
    NumberValidator,
    PositiveNumberValidator
  ],
  exports: [
    IntegerValidator,
    NumberValidator,
    PositiveNumberValidator
  ]
})

export class CustomValidatorsModule { }
