import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SearchLocationComponent } from 'app/shared/components/search-location/search-location.component';
import { LocationModel } from 'app/shared/models/location-model';

@Component({
  selector: 'app-prev-and-next-poc',
  templateUrl: './prev-and-next-poc.component.html',
  styleUrls: ['./prev-and-next-poc.component.css']
})
export class PrevAndNextPocComponent implements OnInit, AfterViewInit {
  @ViewChildren(SearchLocationComponent) searchLocationComponentList: QueryList<SearchLocationComponent>;

  prevPortOfCallComponent: SearchLocationComponent;
  nextPortOfCallComponent: SearchLocationComponent;

  prevLocationModel: LocationModel;
  nextLocationModel: LocationModel;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {

    this.prevPortOfCallComponent = this.searchLocationComponentList.first;
    this.nextPortOfCallComponent = this.searchLocationComponentList.last;

    this.prevPortOfCallComponent.getService().locationData$.subscribe(
      data => {
        this.prevLocationModel = data;
        console.log(data);
      }
    );

    this.nextPortOfCallComponent.getService().locationData$.subscribe(
      data => {
        this.nextLocationModel = data;
        console.log(data);
      }
    );
  }
}
