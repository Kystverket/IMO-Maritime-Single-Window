import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';
import { ErrorService } from '../shared/services/error.service';

@Component({
  standalone: false,
  selector: 'app-error',
  templateUrl: './error.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {

  header = 'ERROR PAGE';
  message: string;

  private errorReasonSubscription: Subscription;
  private errorMessageSubscription: Subscription;

  constructor(
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.errorReasonSubscription = this.errorService.errorReason$.subscribe(
      reason => this.header = reason
    );
    this.errorMessageSubscription = this.errorService.errorMessage$.subscribe(
      message => this.message = message
    );
  }

  ngOnDestroy(): void {
    this.errorReasonSubscription.unsubscribe();
    this.errorMessageSubscription.unsubscribe();
  }

}
