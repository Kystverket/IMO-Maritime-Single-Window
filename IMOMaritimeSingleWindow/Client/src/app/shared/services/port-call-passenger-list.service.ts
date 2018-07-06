import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from '../interfaces/form-meta-data.interface';
import { PassengerModel } from '../models/port-call-passenger-model';

@Injectable()
export class PortCallPassengerListService {

  constructor() { }

  private passengerListSource = new BehaviorSubject<any>(null);
  passengerList$ = this.passengerListSource.asObservable();

  private passengerListMeta = new BehaviorSubject<any>({
    valid: true
  });
  passengerListMeta$ = this.passengerListMeta.asObservable();

  private dataIsPristine = new BehaviorSubject<Boolean>(true);
  dataIsPristine$ = this.dataIsPristine.asObservable();

  private passengerModelSource = new BehaviorSubject<PassengerModel>(new PassengerModel());
  passengerModel$ = this.passengerModelSource.asObservable();

  private embarkationModelDataSource = new BehaviorSubject<any>(null);
  embarkationModelData$ = this.embarkationModelDataSource.asObservable();

  private disembarkationModelDataSource = new BehaviorSubject<any>(null);
  disembarkationModelData$ = this.disembarkationModelDataSource.asObservable();

  private countryOfBirthModelDataSource = new BehaviorSubject<any>(null);
  countryOfBirthModelData$ = this.countryOfBirthModelDataSource.asObservable();

  private nationalityModelDataSource = new BehaviorSubject<any>(null);
  nationalityModelData$ = this.nationalityModelDataSource.asObservable();

  private dateOfBirthModelDataSource = new BehaviorSubject<any>(null);
  dateOfBirthData$ = this.dateOfBirthModelDataSource.asObservable();

  setPassengersList(data) {
    this.passengerListSource.next(data);
  }

  setPassengerListMeta(metaData: FormMetaData) {
    this.passengerListMeta.next(metaData);
  }

  setDataIsPristine(isPristine) {
    this.dataIsPristine.next(isPristine);
  }

  setPortOfEmbarkation(data) {
    const tempPortModel = this.createPortObject(data);

    this.embarkationModelDataSource.next(tempPortModel);
    const tempPassengerModel = this.passengerModelSource.getValue();
    tempPassengerModel.portOfEmbarkation = tempPortModel;
    this.setPassengerModel(tempPassengerModel);
  }

  setPortOfDisembarkation(data) {
    const tempPortModel = this.createPortObject(data);

    this.disembarkationModelDataSource.next(tempPortModel);
    const tempPassengerModel = this.passengerModelSource.getValue();
    tempPassengerModel.portOfDisembarkation = tempPortModel;
    this.setPassengerModel(tempPassengerModel);
  }

  setCountryOfBirth(data) {
    this.countryOfBirthModelDataSource.next(data);
    const tempPassengerModel = this.passengerModelSource.getValue();
    tempPassengerModel.countryOfBirth = data;
    this.setPassengerModel(tempPassengerModel);
  }

  setNationality(data) {
    this.nationalityModelDataSource.next(data);
    const tempPassengerModel = this.passengerModelSource.getValue();
    tempPassengerModel.nationality = data;
    this.setPassengerModel(tempPassengerModel);
  }

  setDateOfBirth(data) {
    const dateOfBirth = this.getDateFormat(data);
    this.dateOfBirthModelDataSource.next(dateOfBirth);
    const tempPassengerModel = this.passengerModelSource.getValue();
    tempPassengerModel.dateOfBirth = dateOfBirth;
    this.setPassengerModel(tempPassengerModel);
  }

  setPassengerModel(data) {
    this.passengerModelSource.next(data);
  }

  getDateFormat(date) {
    const dateString = date.year + '-' + date.month + '-' + date.day;
    return new Date(dateString);
  }

  getNgbDateFormat(date) {
    const newDate = new Date(date);
    return {
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      day: newDate.getDate()
    };
  }

  deletePassengerEntry(data) {
    let copyPassengerList = this.passengerListSource.getValue();
    data = JSON.stringify(this.createComparableObject(data));

    // Find clicked item
    copyPassengerList.forEach((item, index) => {
      item = JSON.stringify(this.createComparableObject(item));
      if (item === data) {
        copyPassengerList.splice(index, 1);
      }
    });

    copyPassengerList = this.setPassengerIds(copyPassengerList);
    this.setPassengersList(copyPassengerList);

    this.setDataIsPristine(false);
  }

  createComparableObject(item) {
    const object = {
      familyName: item.familyName,
      givenName: item.givenName,
      nationality: item.nationality,
      dateOfBirth: item.dateOfBirth,
      placeOfBirth: item.placeOfBirth,
      countryOfBirth: item.countryOfBirth,
      natureOfIdentityDoc: item.natureOfIdentityDoc,
      numberOfIdentityDoc: item.numberOfIdentityDoc,
      permitNumber: item.permitNumber,
      portOfEmbarkation: item.portOfEmbarkation,
      portOfDisembarkation: item.portOfDisembarkation,
      transit: item.transit,
      passengerId: item.passengerId,
      portCallId: item.portCallId
    };
    return object;
  }

  setPassengerIds(list) {
    let tempPassengerId = 1;
    list.forEach(passenger => {
      passenger.passengerId = tempPassengerId;
      tempPassengerId++;
    });
    return list;
  }

  createPortObject(data) {
    if (data) {
      const tempPortModel = {
        locationId: data.locationId,
        countryId: data.countryId,
        locationTypeId: data.locationTypeId,
        locationSourceId: data.locationSourceId,
        municipalityId: data.municipalityId,
        locationCode: data.locationCode,
        locationNo: data.locationNo,
        postCode: data.postCode,
        name: data.name,
        country: {
          countryId: data.country.countryId,
          callCode: data.country.callCode,
          name: data.country.name,
          threeCharCode: data.country.threeCharCode,
          twoCharCode: data.country.twoCharCode
        },
        locationSource: data.locationSource,
        municipality: data.municipality
        };
      return tempPortModel;
    } else {
      return null;
    }
  }

}
