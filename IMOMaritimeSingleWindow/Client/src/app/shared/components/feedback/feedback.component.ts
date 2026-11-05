import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FeedbackProps } from '../../interfaces/feedback-props.interface';

@Component({
  standalone: false,
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  @Input() props: FeedbackProps;

  @Input() started: boolean;
  @Input() actionSucceeded: boolean;
  @Input() errors: any;
  @Input() errorDescription: string;
  @Input() successMessage: string;

  constructor() {
   }

  ngOnInit() {
  }

}
