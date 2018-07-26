import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from '../interfaces/form-meta-data.interface';
import { Http } from '@angular/http';
import { PersonOnBoardModel } from '../models/person-on-board-model';

@Injectable()
export class PortCallPassengerListService {

  private personOnBoardListUrl: string;
  private genderUrl: string;
  private identityDocTypeUrl: string;

  constructor(private http: Http) {
    this.personOnBoardListUrl = 'api/personOnBoard/list';
    this.genderUrl = 'api/gender';
    this.identityDocTypeUrl = 'api/identitydocumenttype';
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
  registerPassengerList(passengerList: any[]) {
    const uri = this.personOnBoardListUrl;
    return this.http.post(uri, passengerList).map(res => res.json());
  }

  updatePassengerList(passengerList: any[]) {
    const uri = this.personOnBoardListUrl;
    return this.http.put(uri, passengerList).map(res => res.json());
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
