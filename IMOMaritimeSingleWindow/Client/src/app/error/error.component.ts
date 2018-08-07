import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';
import { ErrorService } from '../shared/services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {

  @Input() header = 'ERROR PAGE';
  @Input() message: string;

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
