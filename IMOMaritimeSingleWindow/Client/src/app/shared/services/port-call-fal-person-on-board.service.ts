import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenderModel, IdentityDocumentModel, PersonOnBoardModel, PersonOnBoardTypeModel } from 'app/shared/models/';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class PortCallFalPersonOnBoardService {

  private genderUrl: string;
  private personOnBoardString: string;
  private portCallUrl: string;
  private personOnBoardUrl: string;
  private personOnBoardTypeUrl: string;

  response: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.genderUrl = 'api/gender';
    this.personOnBoardString = 'persononboard';
    this.portCallUrl = 'api/portcall';
    this.personOnBoardUrl = 'api/personOnBoard';
    this.personOnBoardTypeUrl = 'api/PersonOnBoardType';
   }

  private passengerListSource = new BehaviorSubject<any>(null);
  passengerList$ = this.passengerListSource.asObservable();

  private passengerDataIsPristine = new BehaviorSubject<boolean>(true);
  passengerDataIsPristine$ = this.passengerDataIsPristine.asObservable();

  private passengerSequenceNumberSource = new BehaviorSubject<number>(1);
  sequenceNumber$ = this.passengerSequenceNumberSource.asObservable();

  private passengerListIsChecked = new BehaviorSubject<boolean>(false);
  passengerListIsChecked$ = this.passengerListIsChecked.asObservable();

  private crewListSource = new BehaviorSubject<any>(null);
  crewList$ = this.crewListSource.asObservable();

  private crewDataIsPristine = new BehaviorSubject<boolean>(true);
  crewDataIsPristine$ = this.crewDataIsPristine.asObservable();

  private crewSequenceNumberSource = new BehaviorSubject<number>(1);
  crewSequenceNumber$ = this.crewSequenceNumberSource.asObservable();

  private crewListIsChecked = new BehaviorSubject<boolean>(false);
  crewListIsChecked$ = this.crewListIsChecked.asObservable();

   // Http
  getPersonOnBoardById(personOnBoardId: number) {
    const uri = [this.personOnBoardUrl, personOnBoardId].join('/');
    return this.httpClient.get<PersonOnBoardModel>(uri, {observe: 'body'});
  }

  // Get all person on board entities of a port call
  getPersonOnBoardListByPortCallId(portCallId: number) {
    // uri = api/portCall/{portCallId}/personOnBoard
    const uri = [this.portCallUrl, portCallId, this.personOnBoardString].join('/');
    return this.httpClient.get<PersonOnBoardModel[]>(uri, {observe: 'body'});
  }

  getPassengerListByPortCallId(portCallId: number) {
    // uri = api/portCall/{portCallId}/personOnBoard/personOnBoardType/{personOnBoardTypeId}
    const uri = [this.portCallUrl, portCallId, this.personOnBoardString, 'personOnBoardType', 2].join('/');
    return this.httpClient.get<PersonOnBoardModel[]>(uri, {observe: 'body'});
  }

  getCrewListByPortCallId(portCallId: number) {
    // uri = api/portCall/{portCallId}/personOnBoard/personOnBoardType/{personOnBoardTypeId}
    const uri = [this.portCallUrl, portCallId, this.personOnBoardString, 'personOnBoardType', 1].join('/');
    return this.httpClient.get<PersonOnBoardModel[]>(uri, {observe: 'body'});
  }

  getGenderList() {
    const uri = this.genderUrl;
    return this.httpClient.get<GenderModel[]>(uri, {observe: 'body'});
  }

  getPersonOnBoardType(personOnBoardTypeId: number) {
    const uri = [this.personOnBoardTypeUrl, personOnBoardTypeId].join('/');
    return this.httpClient.get<PersonOnBoardTypeModel>(uri, {observe: 'body'});
  }

  updatePersonOnBoardList(portCallId: number, personOnBoardList: any[], personOnBoardTypeId: number) {
    console.log('Saving person on board list...');
    let cleanedPersonOnBoardList;
    cleanedPersonOnBoardList = this.cleanPersonOnBoardList(personOnBoardList);
    // uri = api/portCall/{portCallId}/personOnBoard/personOnBoardType/{personOnBoardTypeId}
    const uri = [this.portCallUrl, portCallId, this.personOnBoardString, 'personOnBoardType', personOnBoardTypeId].join('/');
    return this.httpClient.put<PersonOnBoardModel[]>(uri, cleanedPersonOnBoardList).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  // Setters
  setPassengersList(data) {
    this.passengerListSource.next(data);
  }

  setCrewList(data) {
    this.crewListSource.next(data);
  }

  setPassengerDataIsPristine(isPristine: boolean) {
    this.passengerDataIsPristine.next(isPristine);
  }

  setCrewDataIsPristine(isPristine: boolean) {
    this.crewDataIsPristine.next(isPristine);
  }

  setPassengerCheckedInProgressBar(checked: boolean) {
    this.passengerListIsChecked.next(checked);
  }

  setCrewCheckedInProgressBar(checked: boolean) {
    this.crewListIsChecked.next(checked);
  }

  cleanPersonOnBoardList(personOnBoardList: any[]) {
    const cleanedPersonOnBoardList = [];

    if (personOnBoardList) {
      personOnBoardList.map(personOnBoard => {
        const cleanedPersonOnBoard = Object.assign(new PersonOnBoardModel(), personOnBoard);

        if (personOnBoard.dateOfBirth) {
          cleanedPersonOnBoard.dateOfBirth = new Date(Date.UTC(personOnBoard.dateOfBirth.getFullYear(), personOnBoard.dateOfBirth.getMonth(), personOnBoard.dateOfBirth.getDate()));
        }
        cleanedPersonOnBoard.countryOfBirth = null;
        cleanedPersonOnBoard.personOnBoardType = null;
        cleanedPersonOnBoard.gender = null;
        cleanedPersonOnBoard.portCall = null;
        cleanedPersonOnBoard.portOfEmbarkation = null;
        cleanedPersonOnBoard.portOfDisembarkation = null;
        cleanedPersonOnBoard.nationality = null;

        // Identity Documents
        cleanedPersonOnBoard.identityDocument = [];
        personOnBoard.identityDocument.forEach((identityDocument, index) => {
          const cleanedIdentityDocument = Object.assign(new IdentityDocumentModel(), identityDocument);
          if (identityDocument.identityDocumentIssueDate) {
            cleanedIdentityDocument.identityDocumentIssueDate = new Date(Date.UTC(identityDocument.identityDocumentIssueDate.getFullYear(), identityDocument.identityDocumentIssueDate.getMonth(), identityDocument.identityDocumentIssueDate.getDate()));
          }
          if (identityDocument.identityDocumentExpiryDate) {
            cleanedIdentityDocument.identityDocumentExpiryDate = new Date(Date.UTC(identityDocument.identityDocumentExpiryDate.getFullYear(), identityDocument.identityDocumentExpiryDate.getMonth(), identityDocument.identityDocumentExpiryDate.getDate()));
          }
          cleanedIdentityDocument.identityDocumentType = null;
          cleanedIdentityDocument.issuingNation = null;

          cleanedPersonOnBoard.identityDocument.push(cleanedIdentityDocument);
        });
      cleanedPersonOnBoardList.push(cleanedPersonOnBoard);
      });
    }

    return cleanedPersonOnBoardList;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return Observable.throw(
      'Something bad happened; please try again later.');
  }

}
