import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SearchLocationComponent } from 'app/shared/components/search-location/search-location.component';

@Component({
  selector: 'app-prev-and-next-poc',
  templateUrl: './prev-and-next-poc.component.html',
  styleUrls: ['./prev-and-next-poc.component.css']
})
export class PrevAndNextPocComponent implements OnInit, AfterViewInit {
  @ViewChildren(SearchLocationComponent) searchLocationComponentList: QueryList<SearchLocationComponent>;

  constructor() {}

  ngOnInit() { }

  ngAfterViewInit() {
    this.searchLocationComponentList.forEach(searchLocationComponent => {
      searchLocationComponent.getService().locationData$.subscribe(
        data => {
          console.log(data);
        }
      );
    });
  }
}
