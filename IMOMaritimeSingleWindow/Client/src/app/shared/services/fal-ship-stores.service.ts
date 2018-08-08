import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PortCallShipStoresModel } from '../models/port-call-ship-stores-model';

@Injectable()
export class FalShipStoresService {

  private shipStoresUrl = 'api/falShipStores';
  private shipStoresListUrl = 'api/falShipStores/list';
  private portCallUrl = 'api/portCall';
  private shipStoresString = 'falShipStores';
  private measurementTypeUrl = 'api/measurementType';

  constructor(private http: Http) { }

  private shipStoresInformationSource = new BehaviorSubject<PortCallShipStoresModel[]>(null);
  shipStoresList$ = this.shipStoresInformationSource.asObservable();

  private shipStoresInformationMeta = new BehaviorSubject<any>({ valid: true });
  shipStoresInformationMeta$ = this.shipStoresInformationMeta.asObservable();

  private dataIsPristine = new BehaviorSubject<boolean>(true);
  dataIsPristine$ = this.dataIsPristine.asObservable();

  private sequenceNumberSource = new BehaviorSubject<number>(1);
  sequenceNumber$ = this.sequenceNumberSource.asObservable();

  private isCheckedInProgressBar = new BehaviorSubject<boolean>(false);
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
    console.log('Updating ship stores...');
    console.log(shipStoresList);
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
    console.log(data);
    this.shipStoresInformationSource.next(data);
  }

  // Update setShipStoresInformationMeta
  setShipStoresInformationMeta(metaData: FormMetaData) {
    this.shipStoresInformationMeta.next(metaData);
  }

  setDataIsPristine(isPristine: boolean) {
    this.dataIsPristine.next(isPristine);
  }

  setCheckedInProgressBar(checked: boolean) {
    this.isCheckedInProgressBar.next(checked);
  }

  // Delete port call draft
  deleteShipStoreEntry(sequenceNumber) {
    let shipStoresList = this.shipStoresInformationSource.getValue();

    const shipStoreToDeleteIndex = shipStoresList.findIndex(st => st.sequenceNumber === sequenceNumber);

    if (shipStoreToDeleteIndex !== -1) {
      shipStoresList.splice(shipStoreToDeleteIndex, 1);
      // Reset all sequenceNumbers
      shipStoresList = this.setSequenceNumbers(shipStoresList);
      this.setShipStoresInformationData(shipStoresList);

      // Set dataIsPristine to false (data is touched)
      this.setDataIsPristine(false);
    } else {
      console.log('Something went wrong when trying to delete ship store');
    }
  }

  /******************
   *
   *  HELP METHODS
   *
   ******************/

  setSequenceNumbers(list) {
    let tempSequenceNumber = 1;
    list.forEach(item => {
      item.sequenceNumber = tempSequenceNumber;
      tempSequenceNumber++;
    });
    return list;

  }

}
