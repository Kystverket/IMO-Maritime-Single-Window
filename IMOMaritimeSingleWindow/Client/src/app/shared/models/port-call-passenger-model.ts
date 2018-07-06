
export class PassengerModel {
    passengerId: number;
    familyName: string;
    givenName: string;
    nationality: string; // will have to change
    dateOfBirth: Date;
    placeOfBirth: string;
    countryOfBirth: string;
    natureOfIdentityDoc: string; // natureOfIdentityDoc: IdentityDocumentTypeModel;
    numberOfIdentityDoc: number;
    permitNumber: number;
    portOfEmbarkation: any; // will have to change
    portOfDisembarkation: any; // will have to change
    transit: boolean;

    // Connected tables (not yet)
    portCallId: number;
}
