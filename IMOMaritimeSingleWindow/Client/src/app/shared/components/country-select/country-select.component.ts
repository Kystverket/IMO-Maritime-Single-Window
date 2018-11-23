import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from '../../../../../node_modules/rxjs';
import { CountryModel } from '../../models/country-model';
import { CountryService } from '../../services/country.service';

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
    this.countryResult.emit(this.countryModel);
  }

}
