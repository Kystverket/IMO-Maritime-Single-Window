import { Component, Input, OnInit } from '@angular/core';
import { FeedbackProps } from '../../interfaces/feedback-props.interface';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
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
