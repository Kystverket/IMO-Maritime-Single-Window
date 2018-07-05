import { Component, OnInit, Input } from '@angular/core';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';

@Component({
  selector: 'app-find-country-of-birth',
  templateUrl: './find-country-of-birth.component.html',
  styleUrls: ['./find-country-of-birth.component.css']
})
export class FindCountryOfBirthComponent implements OnInit {

  @Input() label: string;

  countryOfBirthModel: any;
  countryOfBirthFound = false;
  countryOfBirthFlag: string;

  constructor(
    private passengerService: PortCallPassengerListService
  ) { }

  deselectCountry() {
    this.countryOfBirthFound = false;
    this.passengerService.setCountryOfBirth(null);
  }

  setCountry($event) {
    this.passengerService.setCountryOfBirth($event.item);
  }

  ngOnInit() {
      this.passengerService.countryOfBirthModelData.subscribe(countryData => {
        if (countryData) {
          this.countryOfBirthModel = countryData;
          this.countryOfBirthFound = true;
          this.countryOfBirthFlag = (countryData.twoCharCode) ? countryData.twoCharCode.toLowerCase() : null;
        } else {
          this.countryOfBirthFound = false;
        }
      });
  }

}
