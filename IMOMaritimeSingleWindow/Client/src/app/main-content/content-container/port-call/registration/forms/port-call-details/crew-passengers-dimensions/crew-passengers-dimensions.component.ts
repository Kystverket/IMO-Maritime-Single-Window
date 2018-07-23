import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallService } from 'app/shared/services/port-call.service';
import { CrewPassengersAndDimensionsModel } from './crewPassengersAndDimensionsModel';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-crew-passengers-dimensions',
  templateUrl: './crew-passengers-dimensions.component.html',
  styleUrls: ['./crew-passengers-dimensions.component.css']
})
export class CrewPassengersDimensionsComponent implements OnInit, OnDestroy {

  @ViewChild(NgForm) form: NgForm;

  crewPassengersAndDimensionsModel: CrewPassengersAndDimensionsModel = {
    numberOfCrew: null,
    numberOfPassengers: null,
    actualDraught: null,
    airDraught: null
  };

  crewPassengersAndDimensionsDataSubscription: Subscription;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.crewPassengersAndDimensionsDataSubscription = this.portCallService.crewPassengersAndDimensionsData$.subscribe(
      data => {
        if (data) {
          this.crewPassengersAndDimensionsModel = data;
        }
      }
    );
  }

  ngOnDestroy() {
    this.crewPassengersAndDimensionsDataSubscription.unsubscribe();
  }

  persistData() {
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
