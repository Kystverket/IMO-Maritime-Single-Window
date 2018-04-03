import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  clientHeight: number;

  constructor() { 
    this.clientHeight = window.innerHeight;
  }

  ngOnInit(): void {
  }
}
