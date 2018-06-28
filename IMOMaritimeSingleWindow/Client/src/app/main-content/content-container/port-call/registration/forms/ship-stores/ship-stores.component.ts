import { Component, OnInit, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallShipStoresModel } from 'app/shared/models/port-call-ship-stores-model';
import { LocalDataSource } from 'ng2-smart-table';
import { PortCallShipStoresService } from 'app/shared/services/port-call-ship-stores.service';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from 'ng2-smart-table/lib/data-source/data-source';

@Component({
  selector: 'app-ship-stores',
  templateUrl: './ship-stores.component.html',
  styleUrls: ['./ship-stores.component.css']
})
export class ShipStoresComponent implements OnInit {
  originalPortCallShipStoresList: PortCallShipStoresModel[] = [];
  portCallShipStoresList: PortCallShipStoresModel[] = [];

  portCallShipStoresModel: PortCallShipStoresModel = new PortCallShipStoresModel();

  portCallId: number;

  sequenceNumber: number;
  measurementTypeList: Observable<any>;
  measurementTypeNames = [];

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
        // Subscribe to port call ID
        // Load original list and set the list that will be updated to this one
        // This will change when saved the port calls list changes
        this.shipStoresService.getShipStoresByPortCallId(this.portCallShipStoresModel.portCallId).subscribe(list => {
          // Initsiere shipStoresDataSource og lokal liste på nytt for hver gang portCallId endres
          this.shipStoresDataSource = new LocalDataSource();
          this.portCallShipStoresList = [];

          console.log(this.shipStoresDataSource);
          if (list) {
            this.originalPortCallShipStoresList = list;
            this.shipStoresService.setShipStoresOriginalList(this.originalPortCallShipStoresList);
          }
        });
      }
    });

    // Subscribe to shipStoresList$ og set lokal liste og dataSource
    this.shipStoresService.shipStoresList$.subscribe(results => {
      if (results) {
        console.log(results);
        this.portCallShipStoresList = results;
        this.shipStoresDataSource.load(results);
      }

      // Set sequenceNumber to last sequenceNumber
      if (this.portCallShipStoresList.length > 1) {
        this.shipStoresService.setSequenceNumber(this.portCallShipStoresList[this.portCallShipStoresList.length - 1].sequenceNumber);
      } else {
        this.shipStoresService.setSequenceNumber(1);
      }

    });

    // Subscribe to sequenceNumber
    this.shipStoresService.sequenceNumber$.subscribe(sequenceNumber => {
      this.sequenceNumber = sequenceNumber;
    });

    // Get measurement types
    this.shipStoresService.getMeasurementTypeList().subscribe(results => {
      this.measurementTypeList = results;
      results.forEach(element => {
        this.measurementTypeNames = [...this.measurementTypeNames, element.name];
      });
    });
  }

  persistData() {
    // Add sequence number to model to be submitted
    this.portCallShipStoresModel.sequenceNumber = this.sequenceNumber;
    this.sequenceNumber++;

    // Add measurement type id to model to be submittet (is the id necessary in the model?)
    this.measurementTypeList.forEach(element => {
      if (element.name === this.portCallShipStoresModel.measurementType) {
        this.portCallShipStoresModel.measurementTypeId = element.measurementTypeId;
      }
    });

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
