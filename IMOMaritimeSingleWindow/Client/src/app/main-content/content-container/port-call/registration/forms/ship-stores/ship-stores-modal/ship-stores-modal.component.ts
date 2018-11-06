import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MeasurementTypeModel, ShipStoresModel } from 'app/shared/models/';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';

@Component({
  selector: 'app-ship-stores-modal',
  templateUrl: './ship-stores-modal.component.html',
  styleUrls: ['./ship-stores-modal.component.css']
})
export class ShipStoresModalComponent implements OnInit {
  inputShipStoresModel: ShipStoresModel;
  startInputShipStoresModel: ShipStoresModel;

  measurementTypeList: MeasurementTypeModel[];

  shipStoresModel: ShipStoresModel = new ShipStoresModel();
  @Output() outputShipStoresModel: EventEmitter<ShipStoresModel> = new EventEmitter();

  @ViewChild('viewModal') viewModal;
  @ViewChild('editModal') editModal;
  dirtyForm = false;


  constructor(
    private modalService: NgbModal,
    private shipStoresService: FalShipStoresService
  ) { }

  ngOnInit() {
    this.inputShipStoresModel = new ShipStoresModel();

    this.shipStoresService.getMeasurementTypeList().subscribe(measurementTypes => {
      this.measurementTypeList = measurementTypes;
    });
  }

  // Open modals
  openViewModal(shipStoresModel: ShipStoresModel) {
    this.inputShipStoresModel = JSON.parse(JSON.stringify(shipStoresModel));
    this.modalService.open(this.viewModal);
  }

  openEditModal(shipStoresModel: ShipStoresModel) {
    // Set model to modify
    this.inputShipStoresModel = JSON.parse(JSON.stringify(shipStoresModel));
    // Set model to fall back to
    this.shipStoresModel = JSON.parse(JSON.stringify(shipStoresModel));

    this.modalService.open(this.editModal, {
      backdrop: 'static'
    });
  }

  // Output
  editShipStoresItem() {
    this.outputShipStoresModel.emit(this.inputShipStoresModel);
  }

  resetInputShipStoresModel() {
    this.inputShipStoresModel = JSON.parse(JSON.stringify(this.shipStoresModel));
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
