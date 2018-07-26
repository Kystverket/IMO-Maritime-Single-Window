import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { Http } from '@angular/http';

@Injectable()
export class PortCallShipStoresService {

  private shipStoresUrl: string;
  private shipStoresListUrl: string;
  private portCallUrl: string;
  private shipStoresString: string;
  private portCallShipStoresUrl: string; // Ship stores for a given port call
  private measurementTypeUrl: string;

  constructor(private http: Http) {
    this.shipStoresUrl = 'api/falShipStores';
    this.shipStoresListUrl = 'api/falShipStores/list';
    this.portCallUrl = 'api/portCall';
    this.shipStoresString = 'falShipStores';
    this.measurementTypeUrl = 'api/measurementType';
  }

  private shipStoresInformationSource = new BehaviorSubject<any>(null);
  shipStoresList$ = this.shipStoresInformationSource.asObservable();

  private shipStoresInformationMeta = new BehaviorSubject<any>({
    valid: true
  });
  shipStoresInformationMeta$ = this.shipStoresInformationMeta.asObservable();

  private dataIsPristine = new BehaviorSubject<Boolean>(true);
  dataIsPristine$ = this.dataIsPristine.asObservable();

  private sequenceNumberSource = new BehaviorSubject<number>(1);
  sequenceNumber$ = this.sequenceNumberSource.asObservable();

  private isCheckedInProgressBar = new BehaviorSubject<Boolean>(false);
  isCheckedInProgressBar$ = this.isCheckedInProgressBar.asObservable();

  // API calls
  // Get ship stores object by its primary key ID
  getShipStoresById(shipStoresId: number) {
    const uri = [this.shipStoresUrl, shipStoresId].join('/');
    return this.http.get(uri).map(res => res.json());
  }
  // Add new ship stores list to database
  addShipStores(shipStoresList: any[]) {
    console.log('Adding Ship Stores...');
    const uri = this.shipStoresListUrl;
    this.http.post(uri, shipStoresList).map(res => {
      console.log(res);
      this.setDataIsPristine(true);
      return res.json();
    });
  }
  // Update  existing ship stores list in database
  updateShipStores(shipStoresList: any[]) {
    console.log(shipStoresList);
    console.log('Updating ship stores...');
    const uri = this.shipStoresListUrl;
    return this.http.put(uri, shipStoresList).map(res => {
      res.json();
      if (res.status === 200) {
        console.log('Ship stores successfully saved.');
        this.setDataIsPristine(true);
      }
    });
  }
  // Get all ship stores for a given port call
  getShipStoresByPortCallId(portCallId: number) {
    let uri = [this.portCallUrl, portCallId].join('/');
    uri = [uri, this.shipStoresString].join('/');

    return this.http.get(uri).map(res => res.json());
  }
  // Get list of all measurement types
  getMeasurementTypeList() {
    const uri = this.measurementTypeUrl;
    return this.http.get(uri).map(res => res.json());
  }

  /************************
   *
   *  SETTERS AND DELETE
   *
   ************************/

  // Update shipStoresInformationData
  setShipStoresInformationData(data) {
    this.shipStoresInformationSource.next(data);
  }

  // Update setShipStoresInformationMeta
  setShipStoresInformationMeta(metaData: FormMetaData) {
    this.shipStoresInformationMeta.next(metaData);
  }

  setDataIsPristine(isPristine: Boolean) {
    this.dataIsPristine.next(isPristine);
  }

  setCheckedInProgressBar(checked: Boolean) {
    this.isCheckedInProgressBar.next(checked);
  }

  // Delete port call draft
  deleteShipStoreEntry(data) {
    let copyShipStoresInformationSource = this.shipStoresInformationSource.getValue();
    data = JSON.stringify(this.createComparableObject(data));

    // Find clicked item
    copyShipStoresInformationSource.forEach((item, index) => {
      item = JSON.stringify(this.createComparableObject(item));
      if (item === data) {
        copyShipStoresInformationSource.splice(index, 1);
      }
    });

    // Reset all sequenceNumbers
    copyShipStoresInformationSource = this.setSequenceNumbers(copyShipStoresInformationSource);
    this.setShipStoresInformationData(copyShipStoresInformationSource);

    // Set dataIsPristine to false (data is touched)
    this.setDataIsPristine(false);
  }


  /******************
   *
   *  HELP METHODS
   *
   ******************/

  createComparableObject(item) {
    const object = {
      sequenceNumber: item.sequenceNumber,
      articleCode: item.articleCode,
      articleName: item.articleName,
      locationOnBoard: item.locationOnBoard,
      locationOnBoardCode: item.locationOnBoardCode,
      quantity: item.quantity,
    };
    return object;
  }

  setSequenceNumbers(list) {
    let tempSequenceNumber = 1;
    list.forEach(item => {
      item.sequenceNumber = tempSequenceNumber;
      tempSequenceNumber++;
    });
    return list;

  }

}
