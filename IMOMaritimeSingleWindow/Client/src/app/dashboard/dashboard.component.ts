import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ContentService } from '../shared/services/content.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedComponent: string;

  constructor(
    private contentService: ContentService    
    // private httpService: Http
  ) {}

  ngOnInit() {
    this.contentService.contentName$.subscribe((content) => {
      this.selectedComponent = content;
    });

    // this.httpService.get('/api/ship/254168').subscribe(values => {
    //   this.categories = values.json() as string[];
    // });
  }

}
