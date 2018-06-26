import { Component, OnInit } from '@angular/core';
import { PortCallShipStoresService } from '../../../../../../../shared/services/port-call-ship-stores.service';
import { PortCallShipStoresModel } from '../../../../../../../shared/models/port-call-ship-stores-model';
import { FormMetaData } from '../../../../../../../shared/interfaces/form-meta-data.interface';


@Component({
  selector: 'app-save-ship-stores',
  templateUrl: './save-ship-stores.component.html',
  styleUrls: ['./save-ship-stores.component.css']
})
export class SaveShipStoresComponent implements OnInit {
  shipStoresModel: PortCallShipStoresModel = new PortCallShipStoresModel();
  reportingModel: any;

  shipStoresInformationMeta: FormMetaData = { valid: true };

  constructor(private shipStoresService: PortCallShipStoresService) { }

  dataIsPristine = true;

  ngOnInit() {
    this.shipStoresService.dataIsPristine$.subscribe(dataIsPristine => {
      this.dataIsPristine = dataIsPristine;
    });

    // Database Identification
  }

}
