import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from '../interfaces/form-meta-data.interface';
import { Http } from '@angular/http';
import { PersonOnBoardModel } from '../models/person-on-board-model';
import { port } from '_debugger';

@Injectable()
export class PortCallPassengerListService {

  private personOnBoardListUrl: string;
  private genderUrl: string;
  private identityDocTypeUrl: string;
  private personOnBoardString: string;
  private portCallUrl: string;
  private personOnBoardUrl: string;
  private personOnBoardId: number;

  constructor(private http: Http) {
    this.personOnBoardListUrl = 'api/personOnBoard/list';
    this.genderUrl = 'api/gender';
    this.identityDocTypeUrl = 'api/identitydocumenttype';
    this.personOnBoardString = 'persononboard';
    this.portCallUrl = 'api/portcall';
    this.personOnBoardUrl = 'api/personOnBoard';
    this.personOnBoardId = 5;
  }

/*   private passengerModelSource = new BehaviorSubject<PersonOnBoardModel>(null);
  passengerModel$ = this.passengerModelSource.asObservable();
 */
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

  /*private dateModelDataSource = new BehaviorSubject<any>(null);
  dateOfBirthData$ = this.dateModelDataSource.asObservable();*/

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
    console.log('Passengers right before they are supposed to be saved to db: ');
    console.log(passengerList);

    console.log('Updating passengers...');
    const uri = this.personOnBoardListUrl;
    return this.http.put(uri, this.makeTestList(passengerList),
  {
    params: {
      portCallId: portCallId
    }
  }
  ).map(res => {
      res.json();
      if (res.status === 200) {
        console.log('Passenger successfully saved.');
        this.setDataIsPristine(true);
      }
    });
  }

  getPassengerListByPortCallId(portCallId) {
      let uri = [this.portCallUrl, portCallId].join('/');
      uri = [uri, this.personOnBoardString].join('/');
      return this.http.get(uri).map(res => {
        return res.json();
      });
  }

  makeTestList(list) {
    const tempList: PersonOnBoardModel[] = [];
    list.forEach(passenger => {
      const tempPassenger = new PersonOnBoardModel();
      // tempPassenger.personOnBoardId = passenger.personOnBoardId;
      tempPassenger.sequenceNumber = passenger.sequenceNumber;
      tempPassenger.familyName = passenger.familyName;
      tempPassenger.givenName = passenger.givenName;
      tempPassenger.portCallId = passenger.portCallId;

      console.log('In makeTestList: passenger: ' + JSON.stringify(passenger) + ', tempPassenger: ' + JSON.stringify(tempPassenger));

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
    console.log('Passengers right before new data is set in service: ');
    console.log(data);

    const newList = this.setSequenceNumbers(data);
    this.passengerListSource.next(newList);
  }

  setPassengerListMeta(metaData: FormMetaData) {
    this.passengerListMeta.next(metaData);
  }

  setDataIsPristine(isPristine) {
    this.dataIsPristine.next(isPristine);
  }

/*   setPassengerModel(data) {
    this.passengerModelSource.next(data);
  } */

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

}
