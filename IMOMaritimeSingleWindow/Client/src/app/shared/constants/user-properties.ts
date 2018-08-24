import { DataProperty } from 'app/shared/interfaces/property.interface';

export class UserProperties {
  static GIVEN_NAME = 'Given Name';
  static SURNAME = 'Surname';
  static EMAIL = 'Email';
  static PHONE_NUMBER = 'Phone Number';
  static ORGANIZATION = 'Organization';

  propertyList: DataProperty[] = [
    { description: UserProperties.GIVEN_NAME, data: null, imageUrl: null },
    { description: UserProperties.SURNAME, data: null, imageUrl: null },
    { description: UserProperties.EMAIL, data: null, imageUrl: null },
    { description: UserProperties.PHONE_NUMBER, data: null, imageUrl: null },
    { description: UserProperties.ORGANIZATION, data: null, imageUrl: null }
  ];

  static setUserData(propertyList, user) {
    UserProperties.setEmail(propertyList, user.email);
    UserProperties.setPhoneNumber(propertyList, user.phoneNumber);
    if (user.person) {
      UserProperties.setGivenName(propertyList, user.person.givenName);
      UserProperties.setSurname(propertyList, user.person.surname);
    }
    if (user.organization) {
      UserProperties.setOrganization(propertyList, user.organization.name);
    }
  }

  static setGivenName(propertyList, data) {
    propertyList.find(e => e.description === UserProperties.GIVEN_NAME).data = data;
  }

  static setSurname(propertyList, data) {
    propertyList.find(e => e.description === UserProperties.SURNAME).data = data;
  }

  static setEmail(propertyList, data) {
    propertyList.find(e => e.description === UserProperties.EMAIL).data = data;
  }

  static setPhoneNumber(propertyList, data) {
    propertyList.find(e => e.description === UserProperties.PHONE_NUMBER).data = data;
  }

  static setOrganization(propertyList, data) {
    propertyList.find(e => e.description === UserProperties.ORGANIZATION).data = data;
  }

  getPropertyList() {
    return this.propertyList;
  }
}
