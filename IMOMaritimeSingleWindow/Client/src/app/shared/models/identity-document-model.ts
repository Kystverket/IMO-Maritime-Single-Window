import {CountryModel, IdentityDocumentTypeModel } from './';

export class IdentityDocumentModel {
    identityDocumentId: number;
    identityDocumentTypeId: number;
    issuingNationId: number;
    visaOrResidencePermitNumber: string;
    identityDocumentIssueDate: any;
    identityDocumentExpiryDate: any;
    identityDocumentNumber: string;
    personOnBoardId: number;

    identityDocumentType: IdentityDocumentTypeModel;
    issuingNation: any;
}
