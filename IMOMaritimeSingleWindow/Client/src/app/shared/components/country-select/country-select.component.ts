import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CountryModel } from '../../models/country-model';
import { CountryService } from '../../services/country.service';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent implements OnInit {

  @Input() countryModel: CountryModel;
  @Output() countryResult = new EventEmitter<CountryModel>();

  countryList: CountryModel[] = [];

  countryListSubscription: Subscription;

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.countryListSubscription = this.countryService.getCountries().subscribe(
      result => {
        this.countryList = result;
      }
    );
  }

  countryChanged(country) {
    console.log(country);
    console.log(this.countryModel);
    this.countryResult.emit(this.countryModel);
  }

}
