import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActionButtonsComponent } from 'app/shared/components/action-buttons/action-buttons.component';
import { MeasurementTypeModel, ShipStoresModel } from 'app/shared/models/';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable ,  Subscription } from 'rxjs';
import { ShipStoresErrorModalComponent } from './ship-stores-error-modal/ship-stores-error-modal.component';
import { ShipStoresModalComponent } from './ship-stores-modal/ship-stores-modal.component';

@Component({
  selector: 'app-ship-stores',
  templateUrl: './ship-stores.component.html',
  styleUrls: ['./ship-stores.component.css']
})
export class ShipStoresComponent implements OnInit, OnDestroy {

  @Input() portCallId: number;
  @Input() shipStoresList: ShipStoresModel[];

  @ViewChild(NgForm) form: NgForm;
  @ViewChild(ShipStoresModalComponent) shipStoresModalComponent: { openViewModal: (arg0: ShipStoresModel) => void; openEditModal: (arg0: ShipStoresModel) => void; };
  @ViewChild(ShipStoresErrorModalComponent) shipStoresErrorModalComponent: any;


  shipStoresModel: ShipStoresModel = new ShipStoresModel();
  measurementTypeList: Observable<any>;

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
        title: 'Actions',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: ActionButtonsComponent,
        onComponentInitFunction: (instance) => {
          instance.view.subscribe(row => {
            this.openViewShipStoreModal(row);
          });
          instance.edit.subscribe(row => {
            this.openEditShipStoreModal(row);
          });
          instance.delete.subscribe(row => {
            this.deleteShipStore(row);
          });
        }
      },
    }
  };

  getMeasurementTypeSubscription: Subscription;

  constructor(
    private shipStoresService: FalShipStoresService,
    private modalService: NgbModal
  ) { }

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

  excelFileSaved(saved: any) {
    this.shipStoresService.getShipStoresByPortCallId(this.portCallId)
      .finally(() => {
        this.shipStoresService.setShipStoresList(this.shipStoresList);
        this.updateSequenceNumbers();
        this.reloadTable();
      })
      .subscribe(res => {
        this.shipStoresList = res;
      });
  }

  uploadError(entriesWithErrors: any[]) {
    this.shipStoresErrorModalComponent.openViewModal(entriesWithErrors);
  }

  importSuccess($event) {
    if ($event) {
      this.shipStoresErrorModalComponent.openSuccessModal();
    } else {
      this.shipStoresErrorModalComponent.openErrorModal();
    }
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
          quantity: shipStore.quantity,
          measurementType: shipStore.measurementType ? shipStore.measurementType.name : null,
          locationOnBoard: shipStore.locationOnBoard,
          locationOnBoardCode: shipStore.locationOnBoardCode,
        };
        return row;
      });
    }
    return rowData;
  }

  // Set measurement type and id of model
  selectMeasurementType(measurementType: MeasurementTypeModel) {
    if (typeof measurementType !== 'undefined') {
      this.shipStoresModel.measurementType = measurementType;
      this.shipStoresModel.measurementTypeId = measurementType.measurementTypeId;
    } else {
      this.shipStoresModel.measurementType = null;
      this.shipStoresModel.measurementTypeId = null;
    }
  }

  deleteShipStoreItem($event) {
    this.shipStoresList = this.shipStoresList.filter(item => item !== $event.shipStoresModel);
    this.persistData();
  }

  addRectifiedShipStores($event) {
    this.shipStoresList = this.shipStoresList.concat($event);
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
    this.shipStoresService.setShipStoresList(this.shipStoresList);
    this.touchData();
    this.reloadTable();
  }

  touchData() {
    this.listIsPristine = false;
    this.shipStoresService.setDataIsPristine(false);
  }

  clearForm() {
    this.shipStoresModel = new ShipStoresModel();
  }

  reloadTable() {
    const rows = this.generateRows();
    this.shipStoresDataSource.load(rows);
  }

  private updateSequenceNumbers() {
    this.shipStoresList.forEach((shipStore, index) => {
      shipStore.sequenceNumber = index + 1;
    });
  }

  deleteShipStore(row) {
    if (this.shipStoresList.length <= 1) {
      this.shipStoresList = [];
    } else {
      this.shipStoresList.forEach((item, index) => {
        if (item.sequenceNumber === row.sequenceNumber) {
          this.shipStoresList.splice(index, 1);
        }
      });
    }
    this.persistData();
  }

  editShipStoresItem($event) {
    this.shipStoresList[this.shipStoresList.findIndex(p => p.sequenceNumber === $event.sequenceNumber)] = JSON.parse(JSON.stringify($event));
    this.persistData();
  }

  deleteAllShipStores() {
    this.shipStoresList = [];
    this.persistData();
  }

  openViewShipStoreModal(row) {
    this.shipStoresList.forEach(item => {
      if (item.sequenceNumber === row.sequenceNumber) {
        this.shipStoresModalComponent.openViewModal(item);
        return;
      }
    });
  }

  openEditShipStoreModal(row) {
    this.shipStoresList.forEach(item => {
      if (item.sequenceNumber === row.sequenceNumber) {
        this.shipStoresModalComponent.openEditModal(item);
        return;
      }
    });
  }

  openWarningModal(content: any) {
    this.modalService.open(content);
  }
}
