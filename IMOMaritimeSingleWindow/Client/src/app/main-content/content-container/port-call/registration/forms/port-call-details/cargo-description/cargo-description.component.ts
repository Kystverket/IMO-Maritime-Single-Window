import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortCallDetailsService } from 'app/shared/services/port-call-details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cargo-description',
  templateUrl: './cargo-description.component.html',
  styleUrls: ['./cargo-description.component.css']
})
export class CargoDescriptionComponent implements OnInit, OnDestroy {

  cargoDescription: string;

  cargoBriefDescriptionSubscription: Subscription;

  constructor(private detailsService: PortCallDetailsService) { }

  ngOnInit() {
    this.cargoBriefDescriptionSubscription = this.detailsService.cargoBriefDescriptionData$.subscribe(
      cargoDescriptionData => {
        this.cargoDescription = cargoDescriptionData;
      }
    );
  }

  ngOnDestroy() {
    this.cargoBriefDescriptionSubscription.unsubscribe();
  }

  onCargoDescriptionChange() {
    this.detailsService.setCargoBriefDescriptionData(this.cargoDescription);
    this.touchData();
  }

  touchData() {
    this.detailsService.setDetailsPristine(false);
  }
}
