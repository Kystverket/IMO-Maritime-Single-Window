import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ssn-bg',
  templateUrl: './ssn-bg.component.html',
  styleUrls: ['./ssn-bg.component.css']
})
export class SsnBgComponent implements OnInit {
  iconPath = 'assets/images/icons/128x128/white/';

  @Input() icon: string;

  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }

}
