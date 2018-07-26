import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from '../interfaces/form-meta-data.interface';
import { Http } from '@angular/http';
import { PersonOnBoardModel } from '../models/person-on-board-model';
import { templateJitUrl, templateSourceUrl } from '@angular/compiler';
import { IdentityDocumentModel } from '../models/identity-document-model';

@Injectable()
export class PortCallPassengerListService {

  private personOnBoardListUrl: string;
  private genderUrl: string;
  private identityDocTypeUrl: string;
  private personOnBoardString: string;
  private portCallUrl: string;

  constructor(private http: Http) {
    this.personOnBoardListUrl = 'api/personOnBoard/list';
    this.genderUrl = 'api/gender';
    this.identityDocTypeUrl = 'api/identitydocumenttype';
    this.personOnBoardString = 'persononboard';
    this.portCallUrl = 'api/portcall';
  }

  private passengerListSource = new BehaviorSubject<any>(null);
  passengerList$ = this.passengerListSource.asObservable();

  private passengerListMeta = new BehaviorSubject<any>({
    valid: true
  });
  passengerListMeta$ = this.passengerListMeta.asObservable();

  private dataIsPristine = new BehaviorSubject<Boolean>(true);
  dataIsPristine$ = this.dataIsPristine.asObservable();

  private passengerModelSource = new BehaviorSubject<PersonOnBoardModel>(new PersonOnBoardModel());
  passengerModel$ = this.passengerModelSource.asObservable();

  /*private dateModelDataSource = new BehaviorSubject<any>(null);
  dateOfBirthData$ = this.dateModelDataSource.asObservable();*/

  // Http
  addPassengerList(passengerList: any[]) {
    const uri = this.personOnBoardListUrl;
    return this.http.post(uri, passengerList).map(res => {
      res.json();
      this.setDataIsPristine(true);
    });
  }

  updatePassengerList(passengerList: any[]) {
    const uri = this.personOnBoardListUrl;
    return this.http.put(uri, this.makeTestList(passengerList)).map(res => {
      res.json();
      if (res.status === 200) {
        console.log('Passenger successfully saved.');
        this.setDataIsPristine(true);
      }
    });
  }

  getPassengerListByPortCall() {
    if (this.passengerListSource.getValue()) {
      const portCallId = this.passengerListSource.getValue()[0].portCallId;
      let uri = [this.portCallUrl, portCallId].join('/');
      uri = [uri, this.personOnBoardString].join('/');
      console.log(uri);

      return this.http.get(uri).map(res => res.json());
    }
  }

  makeTestList(list) {
    const tempList = [];
    list.forEach(passenger => {
      console.log(passenger);
      const tempPassenger = new PersonOnBoardModel();
      tempPassenger.personOnBoardId = passenger.personOnBoardId;
      tempPassenger.familyName = passenger.familyName;
      tempPassenger.givenName = passenger.givenName;
      tempPassenger.portCallId = passenger.portCallId;

      console.log(tempPassenger);

      const tempPassenger2 = {
        personOnBoardId: passenger.personOnBoardId,
        familyName: passenger.familyName,
        givenName: passenger.givenName,
        dateOfBirth: null,
        placeOfBirth: null,
        occupationName: null,
        occupationCode: null,
        roleCode: null,
        inTransit: null,
        rankName: null,
        rankCode: null,
        countryOfBirthId: null,
        personOnBoardTypeId: null,
        genderId: null,
        portCallId: 160,
        portOfEmbarkationId: null,
        portOfDisembarkationId: null,
        identityDocumentId: null,
        nationalityId: null
      };
      tempList.push(tempPassenger);
    });
    return tempList;
  }

  getGenderList() {
    const uri = this.genderUrl;
    return this.http.get(uri).map(res => res.json());
  }

  getIdentityDocumentTypes() {
    const uri = this.identityDocTypeUrl;
    return this.http.get(uri).map(res => res.json());
  }
  // Setters

  setPassengersList(data) {
    const newList = this.setPassengerIds(data);
    this.passengerListSource.next(newList);
    console.log(this.passengerListSource.getValue());
  }

  setPassengerListMeta(metaData: FormMetaData) {
    this.passengerListMeta.next(metaData);
  }

  setDataIsPristine(isPristine) {
    this.dataIsPristine.next(isPristine);
  }

  setPassengerModel(data) {
    this.passengerModelSource.next(data);
  }

  deletePassengerEntry(data) {
    let copyPassengerList = this.passengerListSource.getValue();
    if (copyPassengerList.length === 1) {
      this.setPassengersList([]);
    } else {
      // Find clicked item
      copyPassengerList.forEach((item, index) => {
        if (item.personOnBoardId === data.personOnBoardId) {
          copyPassengerList.splice(index, 1);
        }
      });
      copyPassengerList = this.setPassengerIds(copyPassengerList);
      this.setPassengersList(copyPassengerList);
    }

    this.setDataIsPristine(false);
  }

  // Helper methods

  setPassengerIds(list) {
    let tempPassengerId = 1;
    list.forEach(passenger => {
      passenger.personOnBoardId = tempPassengerId;
      tempPassengerId++;
    });
    return list;
  }

}
