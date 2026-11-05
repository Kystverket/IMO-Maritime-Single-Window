import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
