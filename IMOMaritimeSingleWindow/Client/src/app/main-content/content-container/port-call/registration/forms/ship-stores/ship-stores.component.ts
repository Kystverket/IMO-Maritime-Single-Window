import { Component, OnInit, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallShipStoresModel } from 'app/shared/models/port-call-ship-stores-model';
import { LocalDataSource } from 'ng2-smart-table';
import { PortCallShipStoresService } from 'app/shared/services/port-call-ship-stores.service';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from 'ng2-smart-table/lib/data-source/data-source';
import { MeasurementTypeModel } from '../../../../../../shared/models/measurement-type-model';

@Component({
  selector: 'app-ship-stores',
  templateUrl: './ship-stores.component.html',
  styleUrls: ['./ship-stores.component.css']
})
export class ShipStoresComponent implements OnInit {
  portCallShipStoresList: PortCallShipStoresModel[] = [];

  portCallShipStoresModel: PortCallShipStoresModel = new PortCallShipStoresModel();

  portCallId: number;

  sequenceNumber: number;
  measurementTypeList: Observable<any>;
  selectedMeasurementType: MeasurementTypeModel;

  listIsPristine: Boolean = true;

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
        title: 'Sequence Number',
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

  constructor(
    private shipStoresService: PortCallShipStoresService,
    private portCallService: PortCallService
  ) {}

  ngOnInit() {
    this.portCallShipStoresModel = new PortCallShipStoresModel();

    this.portCallService.detailsIdentificationData$.subscribe(id => {
      if (id) {
        this.portCallShipStoresModel.portCallId = id.portCallId;

        // Subscribe to shipStoresList$ og set lokal liste og dataSource
        this.shipStoresService.shipStoresList$.subscribe(list => {
          if (list) {
            this.portCallShipStoresList = list;
            this.shipStoresDataSource.load(list);
          }
          // Set sequenceNumber to last sequenceNumber
          if (this.portCallShipStoresList.length > 1) {
            this.shipStoresService.setSequenceNumber(this.portCallShipStoresList[this.portCallShipStoresList.length - 1].sequenceNumber);
          } else {
            this.shipStoresService.setSequenceNumber(1);
          }
        });

        // This will change when saved the port calls list changes
        this.shipStoresService.getShipStoresByPortCallId(this.portCallShipStoresModel.portCallId).subscribe(list => {
          this.shipStoresDataSource = new LocalDataSource();
          this.portCallShipStoresList = [];

          if (list) {
            this.shipStoresService.setShipStoresInformationData(list);
          }
        });
      }
    });

    // Subscribe to sequenceNumber
    this.shipStoresService.sequenceNumber$.subscribe(sequenceNumber => {
      this.sequenceNumber = sequenceNumber;
    });

    // Get measurement types
    this.shipStoresService.getMeasurementTypeList().subscribe(results => {
      this.measurementTypeList = results;
    });
  }

  selectMeasurementType($event) {
    this.portCallShipStoresModel.measurementTypeId = $event.measurementTypeId;
  }

  persistData() {
    console.log('Adding ship store to list');
    if (this.listIsPristine === true) {
      this.listIsPristine = false;
      this.shipStoresService.setDataIsPristine(false);
    }
    // Add sequence number to model to be submitted
    this.portCallShipStoresModel.sequenceNumber = this.sequenceNumber;
    this.sequenceNumber++;

    // Add this ship store to local model and create new model
    console.log(this.portCallShipStoresList);

    this.portCallShipStoresList.push(this.portCallShipStoresModel);
    console.log(this.portCallShipStoresModel);
    this.portCallShipStoresModel = new PortCallShipStoresModel();

    // Update value in service
    this.shipStoresService.setShipStoresInformationData(
      this.portCallShipStoresList
    );
  }

  isValid(valid: boolean): boolean {
    this.sendMetaData();
    return valid;
  }

  private sendMetaData(): void {
    this.shipStoresService.setShipStoresInformationMeta({ valid: this.form.valid });
  }

}
