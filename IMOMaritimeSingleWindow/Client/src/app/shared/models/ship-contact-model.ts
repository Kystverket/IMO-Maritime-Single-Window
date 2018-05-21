import { ContactModel } from "./contact-model";
import { ShipModel } from "./ship-model";

export class ShipContactModel {
    shipContactId: number;
    contactMediumId: number;
    shipId: number;
    contactValue: string;
    isPreferred: boolean;
    comments: string;
}