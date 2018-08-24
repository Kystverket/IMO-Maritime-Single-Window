import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallDetailsService } from 'app/shared/services/port-call-details.service';
import { Subscription } from 'rxjs/Subscription';
import { CrewPassengersAndDimensionsModel } from './crewPassengersAndDimensionsModel';

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

  constructor(private portCallDetailsService: PortCallDetailsService) { }

  ngOnInit() {
    this.crewPassengersAndDimensionsDataSubscription = this.portCallDetailsService.crewPassengersAndDimensionsData$.subscribe(
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
    this.portCallDetailsService.setCrewPassengersAndDimensionsData(this.crewPassengersAndDimensionsModel);
  }

  isValid(valid: boolean): boolean {
    this.sendMetaData();
    return valid;
  }

  private sendMetaData(): void {
    this.portCallDetailsService.setCrewPassengersAndDimensionsMeta({ valid: this.form.valid });
  }
}
