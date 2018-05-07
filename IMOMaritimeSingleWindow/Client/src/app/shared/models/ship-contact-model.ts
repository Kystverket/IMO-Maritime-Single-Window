import { ContactModel } from "./contact-model";
import { ShipModel } from "./ship-model";

export class ShipContactModel {
    shipContactId: number;
    contactMediumId: number;
    shipId: number;
    contactValue: string;
    isPreferred: boolean;
    comments: string;

    constructor(ship: ShipModel, contact: ContactModel) {
        this.shipId = ship.shipId;
        this.contactMediumId = contact.contactMediumId;
        this.contactValue = contact.contactValue;
        this.isPreferred = contact.isPreferred;
        this.comments = contact.comments;
    }
}