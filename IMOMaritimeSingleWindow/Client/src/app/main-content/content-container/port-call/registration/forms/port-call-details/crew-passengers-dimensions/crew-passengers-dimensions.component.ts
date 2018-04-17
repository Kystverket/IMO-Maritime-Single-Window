import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../../shared/services/port-call.service';
import { locateHostElement } from '@angular/core/src/render3/instructions';
import { CrewPassengersAndDimensionsModel } from './crewPassengersAndDimensionsModel';

@Component({
  selector: 'app-crew-passengers-dimensions',
  templateUrl: './crew-passengers-dimensions.component.html',
  styleUrls: ['./crew-passengers-dimensions.component.css']
})
export class CrewPassengersDimensionsComponent implements OnInit {

  positiveDecimalRegex: string = '^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$';
  positiveIntegerRegex: string = '^[0-9]*';

  crewPassengersAndDimensionsModel: CrewPassengersAndDimensionsModel = {
    numberOfCrew: null,
    numberOfPassengers: null,
    actualDraught: null,
    airDraught: null
  };

  numberOfCrewError: boolean = false;
  numberOfPassengersError: boolean = false;
  actualDraughtError: boolean = false;
  airDraughtError: boolean = false;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.crewPassengersAndDimensionsData$.subscribe(
      data => {
        if (data != null) {
          this.crewPassengersAndDimensionsModel = data;
        }
      }
    );
  }

  isNumberOfCrewValid(inputField: any): boolean {
    this.numberOfCrewError = !inputField.valid;
    this.validateAllData();
    return inputField.valid;
  }

  isNumberOfPassengersValid(inputField: any): boolean {
    this.numberOfPassengersError = !inputField.valid;
    this.validateAllData();
    return inputField.valid;
  }

  isActualDraughtValid(inputField: any): boolean {
    this.actualDraughtError = !inputField.valid;
    this.validateAllData();
    return inputField.valid;
  }

  isAirDraughtValid(inputField: any): boolean {
    this.airDraughtError = !inputField.valid;
    this.validateAllData();
    return inputField.valid;
  }

  persistData() {
    this.portCallService.setCrewPassengersAndDimensionsData(this.crewPassengersAndDimensionsModel);
  }

  private validateAllData(): void {
    let errorPresent = this.numberOfCrewError || this.numberOfPassengersError
      || this.actualDraughtError || this.airDraughtError;
    this.portCallService.setCargoWeightError(errorPresent);
  }

  limitInputToPositiveInteger($event) {
    return $event.charCode >= 48 && $event.charCode <= 57;
  }

  limitInputToPositiveDecimal($event) {
    return $event.charCode == 46 || ($event.charCode >= 48 && $event.charCode <= 57);
  }
}
