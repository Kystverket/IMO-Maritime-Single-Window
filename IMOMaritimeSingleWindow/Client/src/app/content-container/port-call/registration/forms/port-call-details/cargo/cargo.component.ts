import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../shared/services/port-call.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  positiveDecimalRegex: string = '^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$';

  cargoModel = {
    grossGrossWeight: null,
    grossWeight: null
  }

  grossGrossWeightError: string;
  grossWeightError: string;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.cargoWeightData$.subscribe(
      data => {
        if (data != null) {
          this.cargoModel = data;
        }
      }
    );
    this.validateData();
  }

  private persistData() {
    this.portCallService.setCargoWeightData(this.cargoModel);
  }

  grossGrossWeightChanged($event) {
    this.checkForGrossGrossWeightError($event);
    this.persistData();
  }

  grossWeightChanged($event) {
    this.checkForGrossWeightError($event);
    this.persistData();
  }

  private checkForGrossGrossWeightError(inputValue) {
    if (inputValue < 0) {
      this.grossGrossWeightError = "Gross gross weight must be a positive number.";
    } else {
      this.grossGrossWeightError = null;
    }
  }

  private checkForGrossWeightError(inputValue) {
    if (inputValue < 0) {
      this.grossWeightError = "Gross weight must be a positive number.";
    } else {
      this.grossWeightError = null;
    }
  }

  private validateData() {
    this.checkForGrossGrossWeightError(this.cargoModel.grossGrossWeight);
    this.checkForGrossWeightError(this.cargoModel.grossWeight);
  }

  limitInputToPositiveDecimal($event) {
    return $event.charCode == 46 || ($event.charCode >= 48 && $event.charCode <= 57);
  }
}
