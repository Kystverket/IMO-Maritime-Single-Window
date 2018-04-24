import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.css']
})
export class TableCardComponent implements OnInit {

  iconPath = "assets/images/VoyageIcons/128x128/white/";

  @Input()
  icon: string;

  @Input()
  title: string;

  @Input()
  collapsible: boolean;

  collapsed: boolean = false;
  collapsedIcon: string = "arrowhead-down.png"

  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.collapsed = !this.collapsed;
    this.collapsedIcon = this.collapsed ? "arrowhead-left.png" : "arrowhead-down.png";
  }
}
