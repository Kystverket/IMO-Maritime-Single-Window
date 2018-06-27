import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { Http } from '@angular/http';

@Injectable()
export class PortCallShipStoresService {

  private shipStoresUrl: string;
  private portCallShipStoresUrl: string; // Ship stores for a given port call

  constructor(private http: Http) {
    this.shipStoresUrl = 'api/falShipStores';
    this.portCallShipStoresUrl = 'api/portCall/falShipStores';
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
  // Add new ship stores object to database
  addShipStores(shipStores: any) {
    const uri = this.shipStoresUrl;
    return this.http.post(uri, shipStores).map(res => res.json());
  }
  // Update existing ship stores object in database
  updateShipStores(shipStores: any) {
    const uri = this.shipStoresUrl;
    return this.http.put(uri, shipStores).map(res => res.json());
  }
  // Get all ship stores for a given port call
  getShipStoresByPortCallId(portCallId: number) {
    const uri = [this.portCallShipStoresUrl, portCallId].join['/'];
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
    console.log(copyShipStoresInformationSource);

    // Find clicked item
    copyShipStoresInformationSource.forEach((item, index) => {
      if (item === data) {
        copyShipStoresInformationSource.splice(index, 1);
      }
    });

    // Set data to the updated list
    this.setShipStoresInformationData(copyShipStoresInformationSource);
  }


}
