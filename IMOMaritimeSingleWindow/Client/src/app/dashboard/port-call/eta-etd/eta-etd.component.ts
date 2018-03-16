import { Component, OnInit } from '@angular/core';
import { DateTime } from './date-time.interface';

@Component({
  selector: 'app-eta-etd',
  templateUrl: './eta-etd.component.html',
  styleUrls: ['./eta-etd.component.css']
})
export class EtaEtdComponent implements OnInit {

  etaModel: DateTime;
  etdModel: DateTime;

  etaDateModel: any;
  etdDateModel: any;

  etaTimeModel: any;
  etdTimeModel: any;

  constructor() { }

  ngOnInit() {
  }

}
