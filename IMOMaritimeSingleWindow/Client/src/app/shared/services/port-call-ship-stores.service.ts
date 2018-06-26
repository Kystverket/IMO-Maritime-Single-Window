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

  private dataIsPristine = new BehaviorSubject<boolean>(true);
  dataIsPristine$ = this.dataIsPristine.asObservable();

  private detailsIdentificationSource = new BehaviorSubject<any>(null);
  detailsIdentificationData$ = this.detailsIdentificationSource.asObservable();

  private sequenceNumberSource = new BehaviorSubject<number>(1);
  sequenceNumber$ = this.sequenceNumberSource.asObservable();

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

    // Find clicked item
    copyShipStoresInformationSource.forEach( (item, index) => {
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
