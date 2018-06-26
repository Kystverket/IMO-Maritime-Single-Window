import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';

@Injectable()
export class PortCallShipStoresService {

  private shipStoresInformationSource = new BehaviorSubject<any>(null);
  shipStoresInformationData$ = this.shipStoresInformationSource.asObservable();

  private shipStoresInformationMeta = new BehaviorSubject<any>({
    valid: true
  });
  shipStoresInformationMeta$ = this.shipStoresInformationMeta.asObservable();

  constructor() { }

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
    Object.keys(data).forEach(function(k) {
      console.log(k + ' - ' + data[k]);
    });
    const copyShipStoresInformationSource = this.shipStoresInformationSource.getValue();
    console.log(copyShipStoresInformationSource);

    // Find clicked item
    copyShipStoresInformationSource.forEach( (item, index) => {
      if (item === data) {
        copyShipStoresInformationSource.splice(index, 1);
      }
    });

    // Set data to the updated list
    this.setShipStoresInformationData(copyShipStoresInformationSource);
  }


}
