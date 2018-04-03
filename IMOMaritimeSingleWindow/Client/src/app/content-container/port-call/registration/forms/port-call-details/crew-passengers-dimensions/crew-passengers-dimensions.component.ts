import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../shared/services/port-call.service';

@Component({
  selector: 'app-crew-passengers-dimensions',
  templateUrl: './crew-passengers-dimensions.component.html',
  styleUrls: ['./crew-passengers-dimensions.component.css']
})
export class CrewPassengersDimensionsComponent implements OnInit {

  crewPassengersAndDimensionsModel = {
    numberOfCrew: null,
    numberOfPassengers: null,
    actualDraught: null,
    airDraught: null
  };

  numberOfCrewError: string;
  numberOfPassengersError: string;
  actualDraughtError: string;
  airDraughtError: string;

  numberOfCrewChanged($event) {
    this.checkForNumberOfCrewError($event);
    this.persistData();
  }

  numberOfPassengersChanged($event) {
    this.checkForNumberOfPassengersError($event);
    this.persistData();
  }

  actualDraughtChanged($event) {    
    this.checkForActualDraughtError($event);
    this.persistData();
  }

  airDraughtChanged($event) {
    this.checkForAirDraughtError($event);
    this.persistData();
  }

  private checkForNumberOfCrewError(inputValue) {
    if (inputValue < 0) {
      this.numberOfCrewError = "Number of crew must be a positive number.";
    } else if (inputValue - Math.floor(inputValue) != 0) {
      this.numberOfCrewError = "Number of crew must be a whole number.";
    } else {
      this.numberOfCrewError = null;
    }
  }

  private checkForNumberOfPassengersError(inputValue) {
    if (inputValue < 0) {
      this.numberOfPassengersError = "Number of passengers must be a positive number.";
    } else if (inputValue - Math.floor(inputValue) != 0) {
      this.numberOfPassengersError = "Number of passengers must be a whole number.";
    } else {
      this.numberOfPassengersError = null;
    }
  }

  private checkForActualDraughtError(inputValue) {
    if (inputValue < 0) {
      this.actualDraughtError = "Actual draught must be a positive number.";
    } else {
      this.actualDraughtError = null;
    }
  }

  private checkForAirDraughtError(inputValue) {
    if (inputValue < 0) {
      this.airDraughtError = "Air draught must be a positive number.";
    } else {
      this.airDraughtError = null;
    }
  }

  private validateData() {    
    this.checkForNumberOfCrewError(this.crewPassengersAndDimensionsModel.numberOfCrew);
    this.checkForNumberOfPassengersError(this.crewPassengersAndDimensionsModel.numberOfPassengers);
    this.checkForActualDraughtError(this.crewPassengersAndDimensionsModel.actualDraught);
    this.checkForAirDraughtError(this.crewPassengersAndDimensionsModel.airDraught);
  }

  private persistData() {
    this.portCallService.setCrewPassengersAndDimensionsData(this.crewPassengersAndDimensionsModel);
  }

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

}
