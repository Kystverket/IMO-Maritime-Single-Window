import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallShipStoresModel } from 'app/shared/models/port-call-ship-stores-model';
import { PortCallService } from 'app/shared/services/port-call.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-ship-stores',
  templateUrl: './ship-stores.component.html',
  styleUrls: ['./ship-stores.component.css']
})
export class ShipStoresComponent implements OnInit {
  portCallShipStoresList: PortCallShipStoresModel[] = [];

  @ViewChild(NgForm) form: NgForm;
  shipStoresDataSource: LocalDataSource = new LocalDataSource();
  mockData = [
    {
      sequenceNumber: 9839,
      articleName: 'Wine'
    },
    {
      sequenceNumber: 3982947,
      articleName: 'Beer'
    }
  ];

  portCallShipStoresModel: PortCallShipStoresModel = {
    sequenceNumber: null,
    articleName: null
    /*articleCode: null,
    quantity: null,
    measurementType: null,
    locationOnBoardCode: null,
    locationOnBoard: null*/
  };

  tableSettings = {
    /*mode: 'external',
    actions: false,*/
    attr: {
      class: 'table table-bordered'
    },
    editor: {
      config: {
        completer: {
          descriptionField: 'Search here'
        }
      }
    },
    noDataMessage: 'There are no ship stores in this list.',
    columns: {
      sequenceNumber: {
        title: 'Sequence Number'
      },
      articleName: {
        title: 'Article Name'
      }
      /*articleCode: {
        title: 'Article Code'
      },
      quantity: {
        title: 'Quantity'
      },
      measurementType: {
        title: 'Measurement Type'
      },
      locationOnBoard: {
        title: 'Location Onboard'
      },
      locationOnBoardCode: {
        title: 'Location Onboard Code'
      }*/
    }
  };

  constructor(private portCallService: PortCallService) {
    /*this.portCallShipStoresList.push(this.portCallShipStoresModel);*/
    this.mockData.forEach(shipStore => {
      this.portCallShipStoresList.push(shipStore);
    });
    console.log(this.portCallShipStoresList);
  }

  ngOnInit() {
    this.portCallService.shipStoresInformationData$.subscribe(data => {
      if (data) {
        console.log(data);

        // this.portCallShipStoresList = data;
        this.shipStoresDataSource.load(data);
      }
    });
  }

  persistData() {
    this.portCallShipStoresList.push(this.portCallShipStoresModel);
    this.portCallShipStoresModel = new PortCallShipStoresModel();
    this.portCallService.setShipStoresInformationData(
      this.portCallShipStoresList
    );
  }

  isValid(valid: boolean): boolean {
    this.sendMetaData();
    return valid;
  }

  private sendMetaData(): void {
    this.portCallService.setShipStoresInformationMeta({
      valid: this.form.valid
    });
  }
}
