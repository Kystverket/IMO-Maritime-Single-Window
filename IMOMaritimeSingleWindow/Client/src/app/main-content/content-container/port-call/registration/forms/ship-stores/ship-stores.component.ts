import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallShipStoresModel } from 'app/shared/models/port-call-ship-stores-model';
import { LocalDataSource } from 'ng2-smart-table';
import { PortCallShipStoresService } from 'app/shared/services/port-call-ship-stores.service';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { PortCallService } from '../../../../../../shared/services/port-call.service';

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
      articleName: 'Wine',
      articleCode: 332,
      quantity: 3441,
      measurementType: 'l',
      locationOnBoardCode: 44,
      locationOnBoard: 'On deck'
    },
    {
      sequenceNumber: 3982947,
      articleName: 'Beer',
      articleCode: 332,
      quantity: 3441,
      measurementType: 'l',
      locationOnBoardCode: 44,
      locationOnBoard: 'On deck'
    }
  ];

  portCallShipStoresModel: PortCallShipStoresModel = {
    sequenceNumber: null,
    articleName: null,
    articleCode: null,
    quantity: null,
    measurementType: null,
    locationOnBoardCode: null,
    locationOnBoard: null
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
      articleCode: {
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
      },
      delete: {
        title: 'Delete',
        // deleteButtonContent: 'Delete',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: DeleteButtonComponent,
      },
    }
  };

  measurementTypes = ['Liter (l)', 'Kilograms (kg)', 'Tonne (t)', 'Cubic Meters (m3)', 'Units (u)'];

  constructor( private shipStoresService: PortCallShipStoresService ) {}

  ngOnInit() {
    this.shipStoresService.shipStoresInformationData$.subscribe(data => {
      if (data) {
        console.log(data);
        this.portCallShipStoresList = data;
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
    this.shipStoresService.setShipStoresInformationMeta({ valid: this.form.valid });
  }

}
