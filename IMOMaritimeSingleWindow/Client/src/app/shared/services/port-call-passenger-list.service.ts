import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from '../interfaces/form-meta-data.interface';

@Injectable()
export class PortCallPassengerListService {

  constructor(private http: Http) { }

  private passengerListSource = new BehaviorSubject<any>(null);
  passengerList$ = this.passengerListSource.asObservable();

  private passengerListMeta = new BehaviorSubject<any>({
    valid: true
  });
  passengerListMeta$ = this.passengerListMeta.asObservable();

  private dataIsPristine = new BehaviorSubject<Boolean>(true);
  dataIsPristine$ = this.dataIsPristine.asObservable();


  setPassengersList(data) {
    this.passengerListSource.next(data);
  }

  setPassengerListMeta(metaData: FormMetaData) {
    this.passengerListMeta.next(metaData);
  }

  setDataIsPristine(isPristine) {
    this.dataIsPristine.next(isPristine);
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
}
