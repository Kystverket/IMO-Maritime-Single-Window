import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentService } from 'app/shared/services/content.service';
import { Subscription } from 'rxjs/Subscription';
import { PortCallPassengerListService } from '../../../../shared/services/port-call-passenger-list.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  selectedComponent: string;

  portCallFormNameSubscription: Subscription;

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.portCallFormNameSubscription = this.contentService.portCallFormName$.subscribe(content => {
      this.selectedComponent = content;
    });
  }

  ngOnDestroy() {
    this.portCallFormNameSubscription.unsubscribe();
  }
}
