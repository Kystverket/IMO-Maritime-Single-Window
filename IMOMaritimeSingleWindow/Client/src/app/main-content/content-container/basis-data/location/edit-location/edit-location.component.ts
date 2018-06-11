import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../../../shared/services/location.service';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {
  location: any;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.locationData$.subscribe(
      data => {
        if (data) {
          this.location = data;
        }
      }
    )
  }

}
