import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.css']
})
export class WhatsNewComponent implements OnInit {

  toggle231118 = false;
  toggle131218 = false;
  toggle010219 = false;
  upArrow = 'assets/images/icons/128x128/arrowhead-up.png';
  downArrow = 'assets/images/icons/128x128/arrowhead-down.png';

  constructor() { }

  ngOnInit() {
  }

  toggle231118ChangeSet() {
    this.toggle231118 = !this.toggle231118;
  }

  toggle131218ChangeSet() {
    this.toggle131218 = !this.toggle131218;
  }

  toggle010219ChangeSet() {
    this.toggle010219 = !this.toggle010219;
  }
}
