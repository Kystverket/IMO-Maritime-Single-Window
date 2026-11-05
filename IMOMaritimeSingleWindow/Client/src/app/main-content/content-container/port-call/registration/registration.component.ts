import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentService } from '../../../../shared/services/content.service';

@Component({
  standalone: false,
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
