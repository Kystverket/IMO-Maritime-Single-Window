import { IdentityDocumentTypeModel } from './identity-document-type-model';

export class IdentityDocumentModel {
    identityDocumentId: number;
    identityDocumentTypeId: number;
    issuingNationId: number;
    visaOrResidencePermitNumber: number;
    identityDocumentIssueDate: Date;
    identityDocumentExpiryDate: Date;

    identityDocumentType: IdentityDocumentTypeModel;
    issuingNation: any;
}
