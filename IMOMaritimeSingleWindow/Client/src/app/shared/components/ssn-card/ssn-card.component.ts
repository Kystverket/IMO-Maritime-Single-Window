import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssn-card',
  templateUrl: './ssn-card.component.html',
  styleUrls: ['./ssn-card.component.css']
})
export class SsnCardComponent implements OnInit {
  iconPath = 'assets/images/VoyageIcons/128x128/white/';

  @Input() icon: string;

  @Input() header: string;

  @Input() collapsible: boolean;

  @Input() collapsed: boolean;

  collapsedIcon: string;

  constructor() {}

  ngOnInit() {
    if (this.collapsed == null) {
      this.collapsed = false;
    }
    this.collapsedIcon = this.collapsed
      ? 'arrowhead-left.png'
      : 'arrowhead-down.png';
  }

  changeState() {
    this.collapsed = !this.collapsed;
    this.collapsedIcon = this.collapsed
      ? 'arrowhead-left.png'
      : 'arrowhead-down.png';
  }
}
