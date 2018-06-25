import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallShipStoresModel } from 'app/shared/models/port-call-ship-stores-model';
import { LocalDataSource } from 'ng2-smart-table';
import { PortCallShipStoresService } from 'app/shared/services/port-call-ship-stores.service';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { ConstantsService } from 'app/shared/services/constants.service';

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
    actions: false,
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
      },
      delete: {
        title: 'Delete',
        // deleteButtonContent: 'Delete',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: DeleteButtonComponent,
      },
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
    },
        /*mode: 'external',*/
        /*{
          custom: [
            {
              name: 'delete',
              title: 'Delete'
            }
          ]
        },*/
  };

  constructor(private shipStoresService: PortCallShipStoresService ) {
    /*this.portCallShipStoresList.push(this.portCallShipStoresModel);*/
    this.mockData.forEach(shipStore => {
      this.portCallShipStoresModel = shipStore;
      this.persistData();
    });
    console.log(this.portCallShipStoresList);
  }

  ngOnInit() {
    this.shipStoresService.shipStoresInformationData$.subscribe(data => {
      if (data) {
        console.log(data);
        this.shipStoresDataSource.load(data);
      }
    });
  }

  persistData() {
    this.portCallShipStoresList.push(this.portCallShipStoresModel);
    this.portCallShipStoresModel = new PortCallShipStoresModel();
    this.shipStoresService.setShipStoresInformationData(
      this.portCallShipStoresList
    );
    console.log(this.shipStoresService.shipStoresInformationData$);
  }

  isValid(valid: boolean): boolean {
    this.sendMetaData();
    return valid;
  }

  private sendMetaData(): void {
    this.shipStoresService.setShipStoresInformationMeta({
      valid: this.form.valid
    });
  }
}
