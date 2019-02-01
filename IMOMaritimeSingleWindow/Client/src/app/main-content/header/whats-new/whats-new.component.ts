import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.css']
})
export class WhatsNewComponent implements OnInit {

  toggle2311 = false;
  toggle1312 = false;
  constructor() { }

  ngOnInit() {
  }

  toggle2311ChangeSet() {
    this.toggle2311 = !this.toggle2311;
  }

  toggle1312ChangeSet() {
    this.toggle1312 = !this.toggle1312;
  }
}
