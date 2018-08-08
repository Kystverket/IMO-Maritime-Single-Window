import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from '../interfaces/form-meta-data.interface';
import { Http } from '@angular/http';
import { PersonOnBoardModel } from '../models/person-on-board-model';

@Injectable()
export class PortCallPassengerListService {

  private personOnBoardListUrl: string;
  private genderUrl: string;
  private personOnBoardString: string;
  private portCallUrl: string;
  private personOnBoardUrl: string;
  private personOnBoardId: number;

  constructor(private http: Http) {
    this.personOnBoardListUrl = 'api/personOnBoard/list';
    this.genderUrl = 'api/gender';
    this.personOnBoardString = 'persononboard';
    this.portCallUrl = 'api/portcall';
    this.personOnBoardUrl = 'api/personOnBoard';
    this.personOnBoardId = 5;
  }

  private passengerListSource = new BehaviorSubject<any>(null);
  passengerList$ = this.passengerListSource.asObservable();

  private passengerListMeta = new BehaviorSubject<any>({
    valid: true
  });
  passengerListMeta$ = this.passengerListMeta.asObservable();

  private dataIsPristine = new BehaviorSubject<Boolean>(true);
  dataIsPristine$ = this.dataIsPristine.asObservable();

  private sequenceNumberSource = new BehaviorSubject<number>(1);
  sequenceNumber$ = this.sequenceNumberSource.asObservable();

  private isCheckedInProgressBar = new BehaviorSubject<Boolean>(false);
  isCheckedInProgressBar$ = this.isCheckedInProgressBar.asObservable();

  // Http
  getPassengerById(personOnBoardId: number) {
    const uri = [this.personOnBoardUrl, personOnBoardId].join('/');
    console.log(uri);
    return this.http.get(uri).map(res => res.json());
  }

  addPassengerList(passengerList: any[]) {
    console.log('Adding passenger...');
    const uri = this.personOnBoardListUrl;
    return this.http.post(uri, passengerList).map(res => {
      this.setDataIsPristine(true);
      return res.json();
    });
  }

  updatePassengerList(passengerList: any[], portCallId: number) {
    console.log(passengerList);
    const cleanedPassengerList = this.cleanPassengerList(passengerList);
    console.log('Updating passengers...');
    let uri = [this.portCallUrl, portCallId].join('/');
    uri = [uri, this.personOnBoardString].join('/');
    return this.http.put(uri, cleanedPassengerList).map(res => {
      if (res.status === 200) {
        console.log('Successfully updated passengers.');
        this.setPassengersList(res.json());
        this.setDataIsPristine(true);
      }
      return res.json();
    });
  }

  getPersonOnBoardListByPortCallId(portCallId) {
    const uri = [this.personOnBoardListUrl, 'portCall', portCallId].join('/');
    return this.http.get(uri).map(res => res.json());
  }

  /* getPassengerListByPortCallId(portCallId) {
      let uri = [this.portCallUrl, portCallId].join('/');
      uri = [uri, this.personOnBoardString].join('/');
      return this.http.get(uri).map(res => {
        return res.json();
      });
  }

  getPassengerByPortCallId(portCallId, personOnBoardId) {
    let uri = [this.portCallUrl, portCallId].join('/');
    uri = [uri, this.personOnBoardString].join('/');
    uri = [uri, personOnBoardId].join('/');
    console.log(uri);
    return this.http.get(uri).map(res => {
      console.log(res);
      return res.json();
    });
  } */

  getSimplePassengersList(portCallId) {
    const uri = this.personOnBoardUrl;
    return this.http.get(uri, {
      params: {
        portCallId: portCallId
      }
    }).map(res => {
      return res.json();
    });
  }

  cleanPassengerList(passengerList: any[]) {
    console.log(passengerList);
    const newPassengerList = [];
    passengerList.forEach(passenger => {

      passenger.countryOfBirth = null;
      passenger.personOnBoardType = null;
      passenger.gender = null;
      passenger.portCall = null;
      passenger.portOfEmbarkation = null;
      passenger.portOfDisembarkation = null;
      passenger.nationality = null;

      // Handle date formats
      if (typeof passenger.dateOfBirth !== 'string') {
        passenger.dateOfBirth = passenger.dateOfBirth.toUTCString();
      } else {
        passenger.dateOfBirth = (new Date(passenger.dateOfBirth.split('T'))).toUTCString();
        console.log(passenger.dateOfBirth);
      }
      passenger.identityDocument.forEach(identityDocument => {
        identityDocument.identityDocumentType = null;
        identityDocument.issuingNation = null;

        // Handle date formats
        if (identityDocument.identityDocumentIssueDate) {
          if (typeof identityDocument.identityDocumentIssueDate !== 'string') {
            identityDocument.identityDocumentIssueDate = identityDocument.identityDocumentIssueDate.toUTCString();
          } else {
            identityDocument.identityDocumentIssueDate = (new Date(identityDocument.identityDocumentIssueDate.split('T'))).toUTCString();
          }
        }
        if (identityDocument.identityDocumentExpiryDate) {
          if (typeof identityDocument.identityDocumentExpiryDate !== 'string') {
            identityDocument.identityDocumentExpiryDate = identityDocument.identityDocumentExpiryDate.toUTCString();
          } else {
            identityDocument.identityDocumentExpiryDate = (new Date(identityDocument.identityDocumentExpiryDate.split('T'))).toUTCString();
          }
        }
      });
      newPassengerList.push(passenger);
    });
    return newPassengerList;
  }

  getGenderList() {
    const uri = this.genderUrl;
    return this.http.get(uri).map(res => res.json());
  }

  // Setters
  setPassengersList(data) {

    const newList = this.setSequenceNumbers(data);
    this.passengerListSource.next(newList);
    this.setDataIsPristine(false);
  }

  setPassengerListMeta(metaData: FormMetaData) {
    this.passengerListMeta.next(metaData);
  }

  setDataIsPristine(isPristine: Boolean) {
    this.dataIsPristine.next(isPristine);
  }

  deletePassengerEntry(data) {
    let copyPassengerList = this.passengerListSource.getValue();
    if (copyPassengerList.length === 1) {
      this.setPassengersList([]);
    } else {
      // Find clicked item
      if (data.personOnBoardId) {
        copyPassengerList.forEach((item, index) => {
          if (item.personOnBoardId === data.personOnBoardId) {
            copyPassengerList.splice(index, 1);
          }
        });
      } else {
        copyPassengerList.forEach((item, index) => {
          if (item.sequenceNumber === data.sequenceNumber) {
            copyPassengerList.splice(index, 1);
          }
        });
      }
      copyPassengerList = this.setSequenceNumbers(copyPassengerList);
      this.setPassengersList(copyPassengerList);
    }

    this.setDataIsPristine(false);
  }

  // Helper methods

  setSequenceNumbers(list) {
    let tempPassengerId = 1;
    list.forEach(passenger => {
      passenger.sequenceNumber = tempPassengerId;
      tempPassengerId++;
    });
    return list;
  }

  editPassenger(editPassenger: PersonOnBoardModel) {
    console.log(editPassenger);
    const copyPassengerList = this.passengerListSource.getValue();
    console.log(copyPassengerList);
    if (editPassenger.personOnBoardId) {
      copyPassengerList.forEach((passenger, index) => {
        if (passenger.personOnBoardId === editPassenger.personOnBoardId) {
          copyPassengerList[index] = editPassenger;
        }
      });
      console.log(copyPassengerList);
    } else {
      copyPassengerList.forEach((passenger, index) => {
        if (passenger.sequenceNumber === editPassenger.sequenceNumber) {
          copyPassengerList[index] = editPassenger;
        }
      });
    }
    this.setPassengersList(copyPassengerList);
  }

}
