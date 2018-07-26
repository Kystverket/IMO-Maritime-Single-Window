import { IdentityDocumentTypeModel } from './identity-document-type-model';

export class IdentityDocumentModel {
    identityDocumentId: number;
    identityDocumentTypeId: number;
    nationalityId: number;
    visaOrResidencePermitNumber: number;
    identityDocumentIssueDate: Date;
    identityDocumentExpiryDate: Date;

    identityDocumentType: IdentityDocumentTypeModel;
    nationality: any;
}
