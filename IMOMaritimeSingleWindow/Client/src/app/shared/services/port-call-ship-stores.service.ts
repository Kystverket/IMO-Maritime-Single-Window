import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { Http } from '@angular/http';

@Injectable()
export class PortCallShipStoresService {

  private shipStoresUrl: string;
  private shipStoresListUrl: string;
  private portCallShipStoresUrl: string; // Ship stores for a given port call
  private measurementTypeUrl: string;

  constructor(private http: Http) {
    this.shipStoresUrl = 'api/falShipStores';
    this.shipStoresListUrl = 'api/falShipStores/list';
    this.portCallShipStoresUrl = 'api/portCall/falShipStores';
    this.measurementTypeUrl = 'api/measurementType';
  }

  private shipStoresInformationSource = new BehaviorSubject<any>(null);
  shipStoresInformationData$ = this.shipStoresInformationSource.asObservable();

  private shipStoresInformationMeta = new BehaviorSubject<any>({
    valid: true
  });
  shipStoresInformationMeta$ = this.shipStoresInformationMeta.asObservable();

  // API calls
  // Get ship stores object by its primary key ID
  getShipStoresById(shipStoresId: number) {
    const uri = [this.shipStoresUrl, shipStoresId].join['/'];
    return this.http.get(uri).map(res => res.json());
  }
  // Add new ship stores list to database
  addShipStores(shipStoresList: any[]) {
    const uri = this.shipStoresListUrl;
    return this.http.post(uri, shipStoresList).map(res => res.json());
  }
  // Update  existing ship stores list in database
  updateShipStores(shipStoresList: any[]) {
    const uri = this.shipStoresListUrl;
    return this.http.put(uri, shipStoresList).map(res => res.json());
  }
  // Get all ship stores for a given port call
  getShipStoresByPortCallId(portCallId: number) {
    const uri = [this.portCallShipStoresUrl, portCallId].join['/'];
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

  // Delete port call draft
  deleteShipStore(data) {
    Object.keys(data).forEach(function (k) {
      console.log(k + ' - ' + data[k]);
    });
    const copyShipStoresInformationSource = this.shipStoresInformationSource.getValue();

    // Find clicked item
    copyShipStoresInformationSource.forEach((item, index) => {
      if (item === data) {
        copyShipStoresInformationSource.splice(index, 1);
      }
    });

    // Reset all sequenceNumbers
    let tempSequenceNumber = 1;
    copyShipStoresInformationSource.forEach(item => {
      item.sequenceNumber = tempSequenceNumber;
      tempSequenceNumber++;
    });

    // Set data to the updated list
    this.setShipStoresInformationData(copyShipStoresInformationSource);
    this.setSequenceNumber(tempSequenceNumber);
  }

  setSequenceNumber(number) {
    this.sequenceNumberSource.next(number);
  }


}
