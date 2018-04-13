import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { locateHostElement } from '@angular/core/src/render3/instructions';
import { CrewPassengersAndDimensionsModel } from './crewPassengersAndDimensionsModel';
import { log } from 'util';

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
  
  numberOfCrewError: string;
  numberOfPassengersError: string;
  actualDraughtError: string;
  airDraughtError: string;
  
  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.crewPassengersAndDimensionsData$.subscribe(
      data => {
        if (data != null) {
          this.crewPassengersAndDimensionsModel = data;
        }
      }
    );
    this.validateData();
  }

  numberOfCrewChanged($event) {
    this.hasNumberOfCrewError($event);
    this.persistData();
  }

  numberOfPassengersChanged($event) {
    this.hasNumberOfPassengersError($event);
    this.persistData();
  }

  actualDraughtChanged($event) {
    this.hasActualDraughtError($event);
    this.persistData();
  }

  airDraughtChanged($event) {
    this.hasAirDraughtError($event);
    this.persistData();
  }

  private hasNumberOfCrewError(inputValue): boolean {
    if (inputValue < 0) {
      this.numberOfCrewError = "Number of crew must be a positive number.";
    } else if (inputValue - Math.floor(inputValue) != 0) {
      this.numberOfCrewError = "Number of crew must be a whole number.";
    } else {
      this.numberOfCrewError = null;
      return false;
    }
    return true;
  }

  private hasNumberOfPassengersError(inputValue): boolean {
    if (inputValue < 0) {
      this.numberOfPassengersError = "Number of passengers must be a positive number.";
    } else if (inputValue - Math.floor(inputValue) != 0) {
      this.numberOfPassengersError = "Number of passengers must be a whole number.";
    } else {
      this.numberOfPassengersError = null;
      return false;
    }
    return true;
  }

  private hasActualDraughtError(inputValue): boolean {
    if (inputValue < 0) {
      this.actualDraughtError = "Actual draught must be a positive number.";
    } else {
      this.actualDraughtError = null;
      return false;
    }
    return true;
  }

  private hasAirDraughtError(inputValue): boolean {
    if (inputValue < 0) {
      this.airDraughtError = "Air draught must be a positive number.";
    } else {
      this.airDraughtError = null;
      return false;
    }
    return true;
  }

  private validateData() {
    this.hasNumberOfCrewError(this.crewPassengersAndDimensionsModel.numberOfCrew);
    this.hasNumberOfPassengersError(this.crewPassengersAndDimensionsModel.numberOfPassengers);
    this.hasActualDraughtError(this.crewPassengersAndDimensionsModel.actualDraught);
    this.hasAirDraughtError(this.crewPassengersAndDimensionsModel.airDraught);
  }

  private persistData() {
    this.portCallService.setCrewPassengersAndDimensionsData(this.crewPassengersAndDimensionsModel);
  }

  limitInputToPositiveDecimal($event) {
    return $event.charCode == 46 || ($event.charCode >= 48 && $event.charCode <= 57);
  }

  limitInputToPositiveInteger($event) {
    return $event.charCode >= 48 && $event.charCode <= 57;
  }
}
