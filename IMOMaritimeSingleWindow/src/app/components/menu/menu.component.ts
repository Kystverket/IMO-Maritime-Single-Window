import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu_title = "CONFIGURATION MANAGEMENT";
  categories: string[] = [];

  constructor(private _httpService: Http) { }

  ngOnInit() {
    this._httpService.get('/api/categories').subscribe(values => {
      this.categories = values.json() as string[];
    });
  }

}
