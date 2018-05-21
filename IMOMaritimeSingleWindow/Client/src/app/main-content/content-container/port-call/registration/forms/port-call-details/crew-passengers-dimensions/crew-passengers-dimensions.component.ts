import { Component, OnInit, ViewChild } from '@angular/core';
import { PortCallService } from '../../../../../../../shared/services/port-call.service';
import { locateHostElement } from '@angular/core/src/render3/instructions';
import { CrewPassengersAndDimensionsModel } from './crewPassengersAndDimensionsModel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crew-passengers-dimensions',
  templateUrl: './crew-passengers-dimensions.component.html',
  styleUrls: ['./crew-passengers-dimensions.component.css']
})
export class CrewPassengersDimensionsComponent implements OnInit {

  @ViewChild(NgForm) form: NgForm;

  crewPassengersAndDimensionsModel: CrewPassengersAndDimensionsModel = {
    numberOfCrew: null,
    numberOfPassengers: null,
    actualDraught: null,
    airDraught: null
  };

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.crewPassengersAndDimensionsData$.subscribe(
      data => {
        if (data) {
          this.crewPassengersAndDimensionsModel = data;
        }
      }
    );
  }

  persistData() {
    console.log(this.crewPassengersAndDimensionsModel);
    
    this.portCallService.setCrewPassengersAndDimensionsData(this.crewPassengersAndDimensionsModel);
  }

  isValid(valid: boolean): boolean {
    this.sendMetaData();
    return valid;
  }

  private sendMetaData(): void {
    this.portCallService.setCrewPassengersAndDimensionsMeta({ valid: this.form.valid });
  }
}
