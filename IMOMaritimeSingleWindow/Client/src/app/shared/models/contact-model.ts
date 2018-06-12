import { ContactMediumModel } from './contact-medium-model';

export class ContactModel {
  // class properties
  contactMediumId: number;
  contactValue: string;
  isPreferred: boolean;
  comments: string;

  // internal models
  contactMedium: ContactMediumModel;
}
