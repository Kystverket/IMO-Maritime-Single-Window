import { Component, OnInit, Input } from '@angular/core';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';

@Component({
  selector: 'app-find-nationality',
  templateUrl: './find-nationality.component.html',
  styleUrls: ['./find-nationality.component.css']
})
export class FindNationalityComponent implements OnInit {

  @Input() label: string;

  nationalityModel: any;
  nationalityFound = false;
  nationalityFlag: string;

  constructor(
    private passengerService: PortCallPassengerListService
  ) { }

  deselectCountry() {
    this.nationalityFound = false;
    this.passengerService.setNationality(null);
  }

  setCountry($event) {
    this.passengerService.setNationality($event.item);
  }

  ngOnInit() {
      this.passengerService.nationalityModelData$.subscribe(countryData => {
        if (countryData) {
          this.nationalityModel = countryData;
          this.nationalityFound = true;
          this.nationalityFlag = (countryData.twoCharCode) ? countryData.twoCharCode.toLowerCase() : null;
        } else {
          this.nationalityFound = false;
        }
      });
  }

}
