import { ContactMediumModel } from './contact-medium-model';

export class ShipContactModel {
    shipContactId: number;
    contactMediumId: number;
    shipId: number;
    contactValue: string;
    isPreferred: boolean;
    comments: string;
    // internal models:
    contactMedium: ContactMediumModel;
}
