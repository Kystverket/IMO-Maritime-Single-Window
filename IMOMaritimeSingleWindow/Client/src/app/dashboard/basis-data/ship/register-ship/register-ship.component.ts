import { Component, OnInit } from '@angular/core';
import { ShipService } from '../../../../shared/services/ship.service';

@Component({
  selector: 'app-register-ship',
  templateUrl: './register-ship.component.html',
  styleUrls: ['./register-ship.component.css']
})
export class RegisterShipComponent implements OnInit {

  countrySelected: boolean;
  companySelected: boolean;
  shipFlagCodeSelected: boolean;

  constructor(private shipService: ShipService) {}

  ngOnInit() {
    this.shipService.countryData$.subscribe(
      data => this.countrySelected = data != null
    );
    this.shipService.companyData$.subscribe(
      data => this.companySelected = data != null
    );
    this.shipService.shipFlagCodeData$.subscribe(
      data => this.shipFlagCodeSelected = data != null
    );
  }

}
