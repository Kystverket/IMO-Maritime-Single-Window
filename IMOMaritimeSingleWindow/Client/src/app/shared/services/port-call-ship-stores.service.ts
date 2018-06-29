import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { Http } from '@angular/http';
import { resource } from 'selenium-webdriver/http';
import { locateHostElement } from '@angular/core/src/render3/instructions';

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

  private detailsIdentificationSource = new BehaviorSubject<any>(null);
  detailsIdentificationData$ = this.detailsIdentificationSource.asObservable();

  private sequenceNumberSource = new BehaviorSubject<number>(1);
  sequenceNumber$ = this.sequenceNumberSource.asObservable();

  // API calls
  // Get ship stores object by its primary key ID
  getShipStoresById(shipStoresId: number) {
    const uri = [this.shipStoresUrl, shipStoresId].join('/');
    console.log(uri);
    console.log(this.shipStoresUrl);
    console.log(shipStoresId);

    return this.http.get(uri).map(res => res.json());
  }
  // Add new ship stores list to database
  addShipStores(shipStoresList: any[]) {
    console.log('Ship Stores Service: Adding Ship Stores...');
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
    const uri = this.shipStoresListUrl;
    return this.http.put(uri, shipStoresList).map(res => {
      console.log(res);
      this.setDataIsPristine(true);
      res.json();
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
    console.log('DataIsPristine is being set to ' + isPristine);
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

    console.log(this.shipStoresInformationSource.getValue());

    this.setDataIsPristine(false);
  }

  setSequenceNumbers(list) {
    let tempSequenceNumber = 1;
    list.forEach(item => {
      item.sequenceNumber = tempSequenceNumber;
      tempSequenceNumber++;
    });
    return list;

  }

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


}
