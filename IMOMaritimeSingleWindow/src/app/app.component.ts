import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: Http) { }
  categories: string[] = [];
  title = "IMO Maritime Single Window";

  ngOnInit() {
    
    this._httpService.get('/api/categories').subscribe(values => {
      this.categories = values.json() as string[];
    });
  }

  goToLogin() {

  }
}
