import { FeedbackProps } from '../interfaces/feedback-props.interface';

export class FeedBack {

  // properties: FeedbackProps = new FeedbackProps();

  actionSucceeded: boolean;
  successMessage = '';
  errorDescription: string;
  errors: string;

  started = false;

  constructor() { }

  reportSuccess(message: string) {
    // this.properties.started = true;
    // this.properties.actionSucceeded = true;
    // this.properties.successMessage = message;

    this.started = true;
    this.actionSucceeded = true;
    this.successMessage = message;
  }

  reportError(error: any, message: string) {
    // this.properties.started = true;
    // this.properties.actionSucceeded = false;
    // this.properties.errors = error;
    // this.properties.errorDescription = message;


    this.started = true;
    this.actionSucceeded = false;
    this.errors = error;
    this.errorDescription = message;
  }

}
