import { OrganizationModel } from './organization-model';
import { ShipFlagCodeModel } from './ship-flag-code-model';
import { CertificateOfRegistryModel } from './certificate-of-registry-model';
import { InternationalShipSecurityCertificateModel } from './international-ship-security-certificate-model';

export class ShipModel {
    shipId: number;
    shipHullTypeId: number;
    shipStatusId: number;
    shipPowerTypeId: number;
    shipBreadthTypeId: number;
    shipLengthTypeId: number;
    shipSourceId: number;
    shipFlagCodeId: number;
    organizationId: number;
    shipTypeId: number;
    imoNo: number;
    yearOfBuild: number;
    mmsiNo: number;
    name: string;
    callSign: string;
    deadweightTonnage: number;
    grossTonnage: number;
    netTonnage: number;
    length: number;
    breadth: number;
    power: number;
    height: number;
    draught: number;
    hasSideThrusters: boolean;
    hasSideThrustersFront: boolean;
    hasSideThrustersBack: boolean;
    remark: string;
    certificateOfRegistryId: number;
    dateOfKeelLaying: Date;
    // connected models:
    organization: OrganizationModel;
    certificateOfRegistry: CertificateOfRegistryModel;
    shipHullType: any;
    shipStatus: any;
    shipPowerType: any;
    shipBreadthType: any;
    shipLengthType: any;
    shipSource: any;
    shipFlagCode: ShipFlagCodeModel;
    shipType: any;
    shipContact: any[];
    issc: InternationalShipSecurityCertificateModel;
}
