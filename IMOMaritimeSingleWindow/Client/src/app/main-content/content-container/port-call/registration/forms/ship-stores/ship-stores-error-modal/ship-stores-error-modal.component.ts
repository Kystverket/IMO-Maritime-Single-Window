import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MeasurementTypeModel, ShipStoresModel } from 'app/shared/models';
import { FalShipStoresService } from 'app/shared/services';

@Component({
  selector: 'app-ship-stores-error-modal',
  templateUrl: './ship-stores-error-modal.component.html',
  styleUrls: ['./ship-stores-error-modal.component.css']
})
export class ShipStoresErrorModalComponent implements OnInit {
  inputShipStoresModel: any;
  startInputShipStoresModel: ShipStoresModel;

  measurementTypeList: MeasurementTypeModel[];
  lastShipStoreWithError = false;


  @Output() rectifiedShipStoresEmitter: EventEmitter<ShipStoresModel[]> = new EventEmitter();
  @Output() deleteShipStoresEmitter: EventEmitter<boolean> = new EventEmitter();
  @Input() shipStoresWithErrors: any[];
  rectifiedShipStores: ShipStoresModel[] = [];

  @ViewChild('editModal') editModal: any;
  @ViewChild('infoModal') infoModal: any;
  @ViewChild(NgForm)
  form: NgForm;
  currentExcelRow: number;
  currentErrors: any[];

  dirtyForm = false;
  importErrorModels = true;


  constructor(
    private modalService: NgbModal,
    private shipStoresService: FalShipStoresService
  ) { }

  ngOnInit() {
    this.shipStoresWithErrors = [];
      this.shipStoresService.getMeasurementTypeList().subscribe(measurementTypes => {
        this.measurementTypeList = measurementTypes;
      });
  }

  openViewModal(shipStores: any[]) {
    if (!this.shipStoresWithErrors || this.shipStoresWithErrors.length < 0) {
      this.shipStoresWithErrors = shipStores;
    }
    if (this.importErrorModels) {
      this.shipStoresWithErrors = shipStores;
      this.importErrorModels = false;
    }


    this.modalService.open(this.infoModal);
  }

  openEditModal() {
    if (this.shipStoresWithErrors.length === 1) {
      this.lastShipStoreWithError = true;
    }
    // Deep copy to avoid 2-way-binding issues affecting the original list when resetting the form
    this.inputShipStoresModel = JSON.parse(JSON.stringify(this.shipStoresWithErrors[0]));
    this.currentExcelRow = this.inputShipStoresModel.excelRowNum;

    this.currentErrors = this.inputShipStoresModel.errorMessages;
    this.modalService.open(this.editModal, {
      backdrop: 'static'
    });
  }

  saveEntry() {
    const index = this.shipStoresWithErrors.findIndex(ss => ss.sequenceNumber === this.inputShipStoresModel.sequenceNumber);
    this.shipStoresWithErrors.splice(index, 1);
    this.rectifiedShipStores.push(this.inputShipStoresModel);
    if (this.shipStoresWithErrors.length > 0) {
      this.openEditModal();
    }
  }

  finishRectifying() {
    this.rectifiedShipStores.push(this.inputShipStoresModel);
    this.rectifiedShipStoresEmitter.emit(this.rectifiedShipStores);
  }

  deleteEntry() {
    const index = this.shipStoresWithErrors.findIndex(ss => ss.sequenceNumber === this.inputShipStoresModel.sequenceNumber);
    this.shipStoresWithErrors.splice(index, 1);

    if (this.shipStoresWithErrors.length > 0) {
      this.openEditModal();
    } else {
      this.rectifiedShipStoresEmitter.emit(this.rectifiedShipStores);
    }
  }

  deleteShipStoresItem() {
    this.deleteShipStoresEmitter.emit(true);
  }

  setMeasurementType($event) {
    if (typeof $event !== 'undefined') {
      this.inputShipStoresModel.measurementType = $event;
      this.inputShipStoresModel.measurementTypeId = $event.measurementTypeId;
    } else {
      this.inputShipStoresModel.measurementType = null;
      this.inputShipStoresModel.measurementTypeId = null;
    }
  }

}
