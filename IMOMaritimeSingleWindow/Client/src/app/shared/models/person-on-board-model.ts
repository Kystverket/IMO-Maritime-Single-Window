import { PortCallModel } from 'app/shared/models/port-call-model';
import { PersonOnBoardTypeModel } from 'app/shared/models/person-on-board-type-model';
import { GenderModel } from 'app/shared/models/gender-model';

export class PersonOnBoardModel {
    personOnBoardId: number;
    givenName: string;
    surname: string; // change to familyName
    dateOfBirth: Date;
    placeOfBirth: string;
    occupationName: string;
    occupationCode: string;
    roleCode: string;
    inTransit: boolean; // true/false indicator of whether the referenced person is in transit to a foreign country
    rankName: string;
    rankCode: string;
    permitNumber: number;
    // ids
    countryOfBirthId: number; // country id
    nationalityId: number;  // country id
    personOnBoardTypeId: number; // person on board type id
    genderId: number; // gender id
    portCallId: number; // port call id
    portOfEmbarkationId: number;
    portOfDisembarkationId: number;
    numberOfIdentityDoc: number;
    // models
    countryOfBirth: any; // need country model
    nationality: any; // same
    personOnBoardType: PersonOnBoardTypeModel;
    gender: GenderModel;
    portCall: PortCallModel;
    portOfEmbarkation: any; // need port model
    portOfDisembarkation: any; // need port model
    natureOfIdentityDoc: any; // need identity doc model
}
