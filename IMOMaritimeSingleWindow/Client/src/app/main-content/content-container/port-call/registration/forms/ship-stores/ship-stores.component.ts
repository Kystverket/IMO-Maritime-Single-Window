import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MeasurementTypeModel } from 'app/shared/models/measurement-type-model';
import { ShipStoresModel } from 'app/shared/models/ship-stores-model';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';
import { DeleteButtonComponent } from '../shared/delete-button/delete-button.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-ship-stores',
  templateUrl: './ship-stores.component.html',
  styleUrls: ['./ship-stores.component.css']
})
export class ShipStoresComponent implements OnInit, OnDestroy {

  @Input() portCallId: number;
  @Input() shipStoresList: ShipStoresModel[];

  @ViewChild(NgForm) form: NgForm;

  shipStoresModel: ShipStoresModel = new ShipStoresModel();

  measurementTypeList: Observable<any>;
  selectedMeasurementType: MeasurementTypeModel;
  measurementTypeSelected: boolean;

  listIsPristine: Boolean = true;

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
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: DeleteButtonComponent,
        onComponentInitFunction: (instance) => {
          instance.delete.subscribe(row => {
            this.deleteShipStoreItem(row);
          });
        }
      },
    }
  };

  getMeasurementTypeSubscription: Subscription;

  constructor(private shipStoresService: FalShipStoresService) { }

  ngOnInit() {
    this.getMeasurementTypeSubscription = this.shipStoresService.getMeasurementTypeList().subscribe(
      results => {
        this.measurementTypeList = results;
      }
    );
    this.reloadTable();
  }

  ngOnDestroy() {
    this.getMeasurementTypeSubscription.unsubscribe();
  }

  // Generate list that will be sent to shipStoresDataSource that is connected to the smart table
  generateRows(): any[] {
    let rowData = [];
    if (this.shipStoresList) {
      rowData = this.shipStoresList.map(shipStore => {
        const row = {
          shipStoresModel: shipStore,
          sequenceNumber: shipStore.sequenceNumber,
          articleName: shipStore.articleName,
          articleCode: shipStore.articleCode,
          quantity: shipStore.quantity,
          measurementType: shipStore.measurementType.name,
          locationOnBoard: shipStore.locationOnBoard,
          locationOnBoardCode: shipStore.locationOnBoardCode,
        };
        return row;
      });
    }
    return rowData;
  }

  // Set measurement type and id of model
  selectMeasurementType(measurementType) {
    if (measurementType) {
      this.shipStoresModel.measurementType = measurementType;
      this.shipStoresModel.measurementTypeId = measurementType.measurementTypeId;
      this.measurementTypeSelected = true;
    } else {
      this.measurementTypeSelected = false;
    }
  }

  deleteShipStoreItem($event) {
    this.shipStoresList = this.shipStoresList.filter(item => item !== $event.shipStoresModel);
    this.persistData();
  }

  addShipStoreItem() {
    this.shipStoresModel.portCallId = this.portCallId;
    this.shipStoresList.push(this.shipStoresModel);
    this.persistData();
    this.clearForm();
  }

  persistData() {
    this.updateSequenceNumbers();
    this.shipStoresService.setShipStoresInformationData(this.shipStoresList);
    this.touchData();
    this.reloadTable();
  }

  touchData() {
    this.listIsPristine = false;
    this.shipStoresService.setDataIsPristine(false);
  }

  clearForm() {
    this.shipStoresModel = new ShipStoresModel();
    this.selectedMeasurementType = null;
    this.measurementTypeSelected = false;
  }

  reloadTable() {
    const rows = this.generateRows();
    this.shipStoresDataSource.load(rows);
  }

  isValid(valid: boolean): boolean {
    this.sendMetaData();
    return valid;
  }

  private sendMetaData(): void {
    this.shipStoresService.setShipStoresInformationMeta({ valid: this.form.valid });
  }

  private updateSequenceNumbers() {
    this.shipStoresList.forEach((shipStore, index) => {
      shipStore.sequenceNumber = index + 1;
    });
  }

}
