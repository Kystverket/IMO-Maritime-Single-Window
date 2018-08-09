import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  @Input() standAlone = true;
  iconPath = 'assets/images/icons/128x128/white/';
  
  constructor() { }

  ngOnInit() {
  }

}
