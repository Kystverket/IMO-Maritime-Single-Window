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
    cargoGrossGrossWeight: null,
    cargoGrossWeight: null
  }

  grossGrossWeightError: boolean = false;
  grossWeightError: boolean = false;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.cargoWeightData$.subscribe(
      data => {
        if (data != null) {
          this.cargoModel = data;
        }
      }
    );
  }

  persistData() {
    this.portCallService.setCargoWeightData(this.cargoModel);
  }

  isGrossGrossWeightValid(inputField: any): boolean {
    this.grossGrossWeightError = !inputField.valid;
    this.validateAllData();
    return inputField.valid;
  }

  isGrossWeightValid(inputField: any): boolean {
    this.grossWeightError = !inputField.valid;
    this.validateAllData();
    return inputField.valid;
  }

  private validateAllData(): void {
    let errorPresent = this.grossGrossWeightError || this.grossWeightError;    
    this.portCallService.setCargoWeightError(errorPresent);
  }

  limitInputToPositiveDecimal($event) {
    return $event.charCode == 46 || ($event.charCode >= 48 && $event.charCode <= 57);
  }
}
