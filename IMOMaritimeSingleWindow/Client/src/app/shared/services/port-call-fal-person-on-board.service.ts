import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PERSON_ON_BOARD_TYPES } from 'app/shared/constants/enumValues';
import { GenderModel, IdentityDocumentModel, PersonOnBoardModel, PersonOnBoardTypeModel } from 'app/shared/models/';
import { BehaviorSubject ,  Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class PortCallFalPersonOnBoardService {

  private genderUrl: string;
  private personOnBoardString: string;
  private portCallUrl: string;
  private personOnBoardUrl: string;
  private personOnBoardTypeUrl: string;
  private overviewByPortCallUrl: string;
  private hasMasterUrl: string;

  response: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.genderUrl = 'api/gender';
    this.personOnBoardString = 'persononboard';
    this.portCallUrl = 'api/portcall';
    this.personOnBoardUrl = 'api/personOnBoard';
    this.personOnBoardTypeUrl = 'api/PersonOnBoardType';
    this.overviewByPortCallUrl = 'overviewByPortCallEnum';
    this.hasMasterUrl = 'personOnBoard/hasMaster';
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

  private hasMaster = new BehaviorSubject<boolean>(false);
  hasMaster$ = this.hasMaster.asObservable();

   // Http
  getPersonOnBoardById(personOnBoardId: number) {
    const uri = [this.personOnBoardUrl, personOnBoardId].join('/');
    return this.httpClient.get<PersonOnBoardModel>(uri, {observe: 'body'});
  }

  // Get all person on board entities of a port call
  getPersonOnBoardListByPortCallId(portCallId: number) {
    const uri = [this.portCallUrl, portCallId, this.personOnBoardString].join('/');
    return this.httpClient.get<PersonOnBoardModel[]>(uri, {observe: 'body'});
  }

  getPassengerListByPortCallId(portCallId: number) {
    const uri = [this.portCallUrl, portCallId, this.personOnBoardString, 'personOnBoardType', PERSON_ON_BOARD_TYPES.PAX].join('/');
    return this.httpClient.get<PersonOnBoardModel[]>(uri, {observe: 'body'});
  }

  getCrewListByPortCallId(portCallId: number) {
    const uri = [this.portCallUrl, portCallId, this.personOnBoardString, 'personOnBoardType', PERSON_ON_BOARD_TYPES.CREW].join('/');
    return this.httpClient.get<PersonOnBoardModel[]>(uri, {observe: 'body'});
  }

  getGenderList() {
    const uri = this.genderUrl;
    return this.httpClient.get<GenderModel[]>(uri, {observe: 'body'});
  }

  getGenderById(genderId: number) {
    const uri = [this.genderUrl, genderId].join('/');
    return this.httpClient.get<GenderModel>(uri, {observe: 'body'});
  }

  getPersonOnBoardTypeByEnum(personOnBoardTypeEnum: PERSON_ON_BOARD_TYPES) {
    const uri = [this.personOnBoardTypeUrl, personOnBoardTypeEnum].join('/');
    return this.httpClient.get<PersonOnBoardTypeModel>(uri, {observe: 'body'});
  }

  updatePersonOnBoardList(portCallId: number, personOnBoardList: any[], personOnBoardTypeId: number) {
    let cleanedPersonOnBoardList;
    cleanedPersonOnBoardList = this.cleanPersonOnBoardList(personOnBoardList);
    const uri = [this.portCallUrl, portCallId, this.personOnBoardString, 'personOnBoardType', personOnBoardTypeId].join('/');
    return this.httpClient.put<PersonOnBoardModel[]>(uri, cleanedPersonOnBoardList).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  getOverviewByPortCall(portCallId: number, personOnBoardTypeEnum: PERSON_ON_BOARD_TYPES) {
    const uri = [this.personOnBoardUrl, this.overviewByPortCallUrl, portCallId, personOnBoardTypeEnum].join('/');
    return this.httpClient.get<any>(uri, {observe: 'body'});
  }

  getHasMaster(portCallId: number){
    const uri = [this.portCallUrl, portCallId, this.hasMasterUrl].join('/');
    return this.httpClient.get<any>(uri, {observe: 'body'});
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

  setHasMaster(hasMaster: boolean) {
    this.hasMaster.next(hasMaster);
  }

  cleanPersonOnBoardList(personOnBoardList: any[]) {
    const cleanedPersonOnBoardList = [];

    if (personOnBoardList) {
      personOnBoardList.map(personOnBoard => {
        const cleanedPersonOnBoard = Object.assign(new PersonOnBoardModel(), personOnBoard);

        if (personOnBoard.dateOfBirth) {
          const dateOfBirth = new Date(personOnBoard.dateOfBirth);
          cleanedPersonOnBoard.dateOfBirth = new Date(Date.UTC(dateOfBirth.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate()));
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
            const issueDate = new Date(identityDocument.identityDocumentIssueDate);
            cleanedIdentityDocument.identityDocumentIssueDate = new Date(Date.UTC(issueDate.getFullYear(), issueDate.getMonth(), issueDate.getDate()));
          }
          if (identityDocument.identityDocumentExpiryDate) {
            const identityDocumentExpiryDate = new Date(identityDocument.identityDocumentExpiryDate);
            cleanedIdentityDocument.identityDocumentExpiryDate = new Date(Date.UTC(identityDocumentExpiryDate.getFullYear(), identityDocumentExpiryDate.getMonth(), identityDocumentExpiryDate.getDate()));
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
