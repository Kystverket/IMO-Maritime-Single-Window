import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  constructor(
    private location: Location
  ) { }
  
  title = "IMO Maritime Single Window";

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
