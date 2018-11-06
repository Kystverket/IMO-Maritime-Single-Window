import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.css']
})
export class TableCardComponent implements OnInit {
  iconPath = 'assets/images/icons/128x128/white/';

  @Input() icon: string;

  @Input() header: string;

  @Input() collapsible: boolean;

  @Input() collapsed: boolean;

  collapsedIconPath = 'assets/images/icons/128x128/';
  collapsedIconColor = 'white/';
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
