import { LocationModel } from 'app/shared/models/location-model';

export class CertificateOfRegistryModel {
    certificateOfRegistryId: number;
    dateOfIssue: Date;
    certificateNumber: number;
    portLocationId: number;
    ownerName: string;
    // models
    portLocation: LocationModel;
}
