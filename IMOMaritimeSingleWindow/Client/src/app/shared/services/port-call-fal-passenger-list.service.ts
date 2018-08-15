import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from '../interfaces/form-meta-data.interface';
import { Http } from '@angular/http';
import { PersonOnBoardModel } from '../models/person-on-board-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PortCallPassengerListService {

  private personOnBoardListUrl: string;
  private genderUrl: string;
  private personOnBoardString: string;
  private portCallUrl: string;
  private personOnBoardUrl: string;
  private personOnBoardId: number;
  private personOnBoardTypeUrl: string;
  private personOnBoardTypeId: number;

  response: Observable<any>;

  constructor(private http: Http, private httpClient: HttpClient) {
    this.personOnBoardListUrl = 'api/personOnBoard/list';
    this.genderUrl = 'api/gender';
    this.personOnBoardString = 'persononboard';
    this.portCallUrl = 'api/portcall';
    this.personOnBoardUrl = 'api/personOnBoard';
    this.personOnBoardId = 5;
    this.personOnBoardTypeUrl = 'api/PersonOnBoardType';
    this.personOnBoardTypeId = 2;
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

  private passengerListIsChecked = new BehaviorSubject<boolean>(false);
  passengerListIsChecked$ = this.passengerListIsChecked.asObservable();

  // Http
  getPassengerById(personOnBoardId: number) {
    const uri = [this.personOnBoardUrl, personOnBoardId].join('/');
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

  updatePassengerList(passengerList: any[], portCallId: number, personOnBoardTypeId: number) {
    // uri = api/portCall/{portCallId}/persoOnBoard/personOnBoardType/{personOnBoardTypeId}
    const cleanedPassengerList = this.cleanPassengerList(passengerList);
    console.log('Updating passengers...');
    const uri = [this.portCallUrl, portCallId, this.personOnBoardString, 'personOnBoardType', personOnBoardTypeId].join('/');
    return this.http.put(uri, cleanedPassengerList).map(res => {
      if (res.status === 200) {
        console.log('Successfully updated passengers.');
        // this.setPassengersList(res.json());
      }
      return res.status;
    });
  }

  getPersonOnBoardListByPortCallId(portCallId: number, personOnBoardTypeId: number) {
    // uri = api/portCall/{portCallId}/personOnBoard
    const uri = [this.portCallUrl, portCallId, this.personOnBoardString, 'personOnBoardType', personOnBoardTypeId].join('/');
    return this.httpClient.get<PersonOnBoardModel[]>(uri, {observe: 'body'});
  }

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

  getGenderList() {
    const uri = this.genderUrl;
    return this.http.get(uri).map(res => res.json());
  }

  getPersonOnBoardType(personOnBoardTypeId: number) {
    const uri = [this.personOnBoardTypeUrl, personOnBoardTypeId].join('/');
    return this.http.get(uri).map(res => res.json());
  }

  // Setters
  setPassengersList(data) {
    this.passengerListSource.next(data);
    this.setDataIsPristine(false);
  }

  setPassengerListMeta(metaData: FormMetaData) {
    this.passengerListMeta.next(metaData);
  }

  setDataIsPristine(isPristine: Boolean) {
    this.dataIsPristine.next(isPristine);
  }

  setCheckedInProgressBar(checked: boolean) {
    this.passengerListIsChecked.next(checked);
  }

  cleanPassengerList(passengerList: any[]) {
    const cleanedPassengerList = [];
    passengerList.map(passenger => {
      const cleanPassenger = Object.assign({}, passenger);
      cleanPassenger.identityDocument[0] = Object.assign({}, passenger.identityDocument[0]);

      cleanPassenger.countryOfBirth = null;
      cleanPassenger.personOnBoardType = null;
      cleanPassenger.gender = null;
      cleanPassenger.portCall = null;
      cleanPassenger.portOfEmbarkation = null;
      cleanPassenger.portOfDisembarkation = null;
      cleanPassenger.nationality = null;
      cleanPassenger.dateOfBirth = new Date(Date.UTC(passenger.dateOfBirth.getFullYear(), passenger.dateOfBirth.getMonth(), passenger.dateOfBirth.getDate()));

      cleanPassenger.identityDocument = [];
      passenger.identityDocument.forEach(identityDocument => {
        const cleanIdentityDocument = Object.assign({}, identityDocument);
        cleanIdentityDocument.identityDocumentType = null;
        cleanIdentityDocument.issuingNation = null;

        // Handle date formats

        if (identityDocument.identityDocumentIssueDate) {
          cleanIdentityDocument.identityDocumentIssueDate = new Date(Date.UTC(identityDocument.identityDocumentIssueDate.getFullYear(), identityDocument.identityDocumentIssueDate.getMonth(), identityDocument.identityDocumentIssueDate.getDate()));
        }
        if (identityDocument.identityDocumentExpiryDate) {
          cleanIdentityDocument.identityDocumentExpiryDate = new Date(Date.UTC(identityDocument.identityDocumentExpiryDate.getFullYear(), identityDocument.identityDocumentIssueDate.getMonth(), identityDocument.identityDocumentExpiryDate.getDate()));
        }
        cleanPassenger.identityDocument.push(cleanIdentityDocument);
      });

      cleanedPassengerList.push(cleanPassenger);
    });
    return cleanedPassengerList;
  }

}

