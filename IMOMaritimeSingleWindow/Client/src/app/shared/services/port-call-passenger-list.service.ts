import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from '../interfaces/form-meta-data.interface';
import { Observable } from 'rxjs/Observable';
import { CountryService } from './country.service';
import { PassengerModel } from '../models/port-call-passenger-model';

@Injectable()
export class PortCallPassengerListService {

  constructor(private http: Http, private countryService: CountryService) { }

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
    console.log('Set port of embarkation: ' + data);
    const tempPassengerModel = this.passengerModelSource.getValue();
    tempPassengerModel.portOfEmbarkation = data;
    this.passengerModelSource.next(tempPassengerModel);
  }

  setPortOfDisembarkation(data) {
    const tempPassengerModel = this.passengerModelSource.getValue();
    tempPassengerModel.portOfDisembarkation = data;
    this.passengerModelSource.next(tempPassengerModel);
  }

  setPassengerModel(data) {
    this.passengerModelSource.next(data);
  }

  searchCountry(term: string, amount = 10) {
    if (term.length < 1) {
      return Observable.of([]);
    }
    return this.countryService.search(term);
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
