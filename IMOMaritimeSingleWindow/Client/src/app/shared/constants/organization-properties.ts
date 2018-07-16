import { DataProperty } from 'app/shared/interfaces/property.interface';
import { OrganizationModel } from '../models/organization-model';

export class OrganizationProperties {
  static ORGANIZATION_NAME = 'Organization Name';
  static ORGANIZATION_NO = 'Organization Number';
  static ORGANIZATION_TYPE = 'Organization Type';
  static ORGANIZATION_DESCRIPTION = 'Description';

  propertyList: DataProperty[] = [
    { description: OrganizationProperties.ORGANIZATION_NAME, data: null, imageUrl: null },
    { description: OrganizationProperties.ORGANIZATION_NO, data: null, imageUrl: null },
    { description: OrganizationProperties.ORGANIZATION_TYPE, data: null, imageUrl: null },
    { description: OrganizationProperties.ORGANIZATION_DESCRIPTION, data: null, imageUrl: null }
  ];

  static setOrganizationData(propertyList, organizationModel: OrganizationModel) {
    OrganizationProperties.setOrganizationName(propertyList, organizationModel.name);
    OrganizationProperties.setOrganizationNo(propertyList, organizationModel.organizationNo);
    OrganizationProperties.setOrganizationType(propertyList, organizationModel.organizationType.name);
    OrganizationProperties.setOrganizationDescription(propertyList, organizationModel.description);
  }

  static setOrganizationName(propertyList, data) {
    propertyList.find(e => e.description === OrganizationProperties.ORGANIZATION_NAME).data = data;
  }

  static setOrganizationNo(propertyList, data) {
    propertyList.find(e => e.description === OrganizationProperties.ORGANIZATION_NO).data = data;
  }

  static setOrganizationType(propertyList, data) {
    propertyList.find(e => e.description === OrganizationProperties.ORGANIZATION_TYPE).data = data;
  }

  static setOrganizationDescription(propertyList, data) {
    propertyList.find(e => e.description === OrganizationProperties.ORGANIZATION_DESCRIPTION).data = data;
  }

  getPropertyList() {
    return this.propertyList;
  }

}
