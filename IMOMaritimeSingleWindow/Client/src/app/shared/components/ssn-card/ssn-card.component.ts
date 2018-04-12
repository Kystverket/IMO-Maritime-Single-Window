import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ssn-card',
  templateUrl: './ssn-card.component.html',
  styleUrls: ['./ssn-card.component.css']
})
export class SsnCardComponent implements OnInit {

  iconPath = "assets/images/VoyageIcons/128x128/white/";

  @Input()
  icon: string;

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
