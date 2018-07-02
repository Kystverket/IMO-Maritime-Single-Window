import { Component, OnInit, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallShipStoresModel } from 'app/shared/models/port-call-ship-stores-model';
import { LocalDataSource } from 'ng2-smart-table';
import { PortCallShipStoresService } from 'app/shared/services/port-call-ship-stores.service';
import { DeleteButtonComponent } from '../shared/delete-button/delete-button.component';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { Observable } from 'rxjs/Observable';
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

  measurementTypeList: Observable<any>;
  selectedMeasurementType: MeasurementTypeModel;

  listIsPristine: Boolean = true;

  @ViewChild(NgForm) form: NgForm;

  shipStoresDataSource: LocalDataSource = new LocalDataSource();

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

    this.portCallService.detailsIdentificationData$.subscribe(element => {
      if (element) {
        this.portCallShipStoresModel.portCallId = element.portCallId;

        // Subscribe to shipStoresList$ og set lokal liste og dataSource
        this.shipStoresService.shipStoresList$.subscribe(list => {
          if (list) {
            this.portCallShipStoresList = list;
            this.portCallShipStoresModel.portCallId = element.portCallId;

            // Get measurement types
            if (!this.measurementTypeList) {
              this.shipStoresService.getMeasurementTypeList().subscribe(results => {
                this.measurementTypeList = results;
                this.shipStoresDataSource.load(this.generateSmartTable());
              });
            } else {
              this.shipStoresDataSource.load(this.generateSmartTable());
            }

                      /*if (!this.measurementTypeList) {
            this.shipStoresService.getMeasurementTypeList().toPromise().then(measurementTypeList => {
              this.measurementTypeList = measurementTypeList;
            });
          }
          console.log(this.measurementTypeList);*/
          }
        });

        // This will change when the port calls list changes in the database
        this.shipStoresService.getShipStoresByPortCallId(this.portCallShipStoresModel.portCallId).subscribe(list => {
          this.shipStoresDataSource = new LocalDataSource();
          this.portCallShipStoresList = [];

          if (list) {
            this.shipStoresService.setShipStoresInformationData(list);
          }
        });
      }
    });
  }

  // Generate list that will be sent to shipStoresDataSource that is connected to the smart table
  generateSmartTable(): any[] {
    const list = [];
    if (this.portCallShipStoresList) {
    this.portCallShipStoresList.forEach(element => {
      let measureMentTypeName: string;
      this.measurementTypeList.forEach(measurementType => {
        if (measurementType.measurementTypeId === element.measurementTypeId) {
          measureMentTypeName = measurementType.name;
        }
      });

      list.push(
        {
          sequenceNumber: element.sequenceNumber,
          articleName: element.articleName,
          articleCode: element.articleCode,
          quantity: element.quantity,
          measurementType: measureMentTypeName,
          locationOnBoard: element.locationOnBoard,
          locationOnBoardCode: element.locationOnBoardCode,
        }
      );
    });
    }
    return list;
  }

  // Set measurement type and id of model
  selectMeasurementType($event) {
    this.portCallShipStoresModel.measurementTypeId = $event.measurementTypeId;
  }

  persistData() {
      this.listIsPristine = false;
      this.shipStoresService.setDataIsPristine(false);
    // Add sequence number for model to be submitted
    if (this.portCallShipStoresList.length > 0) {
    this.portCallShipStoresModel.sequenceNumber = this.portCallShipStoresList[this.portCallShipStoresList.length - 1].sequenceNumber + 1;
    } else {
      this.portCallShipStoresModel.sequenceNumber = 1;
    }

    // Add this ship store to local model and create new model
    this.portCallShipStoresList.push(this.portCallShipStoresModel);
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
