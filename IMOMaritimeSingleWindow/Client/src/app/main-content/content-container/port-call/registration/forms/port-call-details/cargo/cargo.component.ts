import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallService } from '../../../../../../../shared/services/port-call.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  positiveDecimalRegex: string = '^[0-9]+((\.[0-9]+){1})?$';

  @ViewChild(NgForm) form: NgForm;

  cargoModel = {
    cargoGrossGrossWeight: null,
    cargoGrossWeight: null
  }

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

  isValid(valid: boolean): boolean {
    this.sendMetaData();
    return valid;
  }

  private sendMetaData(): void {
    this.portCallService.setCargoWeightMeta({ valid: this.form.valid });
  }

  limitInputToPositiveDecimal($event) {
    return $event.charCode == 46 || ($event.charCode >= 48 && $event.charCode <= 57);
  }
}
