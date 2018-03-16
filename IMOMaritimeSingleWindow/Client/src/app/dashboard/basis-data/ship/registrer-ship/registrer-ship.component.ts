import { Component, OnInit } from '@angular/core';
import { ShipService } from '../../../../shared/services/ship.service';

@Component({
  selector: 'app-registrer-ship',
  templateUrl: './registrer-ship.component.html',
  styleUrls: ['./registrer-ship.component.css'],
  providers: [ShipService]
})
export class RegistrerShipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
