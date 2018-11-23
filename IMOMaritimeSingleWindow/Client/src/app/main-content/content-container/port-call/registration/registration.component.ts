import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ContentService } from '../../../../shared/services/content.service';

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
