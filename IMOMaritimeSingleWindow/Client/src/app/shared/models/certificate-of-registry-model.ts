import { LocationModel } from 'app/shared/models/location-model';

export class CertificateOfRegistryModel {
    certificateOfRegistryId: number;
    dateOfIssue: Date;
    certificateNumber: string;
    portLocationId: number;
    ownerName: string;
    // models
    portLocation: LocationModel;
}
