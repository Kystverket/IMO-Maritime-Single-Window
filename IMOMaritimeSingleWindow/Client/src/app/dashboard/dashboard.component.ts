import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedComponent: string;

  constructor(
    // private httpService: Http
  ) {}

  ngOnInit() {
    // this.httpService.get('/api/ship/254168').subscribe(values => {
    //   this.categories = values.json() as string[];
    // });
  }

}
