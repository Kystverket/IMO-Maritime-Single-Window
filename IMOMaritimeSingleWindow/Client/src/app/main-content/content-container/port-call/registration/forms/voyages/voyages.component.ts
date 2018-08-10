import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {

  @Input() portCallId: number;

  constructor() { }

  ngOnInit() {
  }

}
