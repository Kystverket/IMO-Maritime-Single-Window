import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { CargoItemModel, ConsignmentModel, LocationModel } from 'app/shared/models/';
import { FalCargoService } from 'app/shared/services/fal-cargo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit, OnDestroy {
  @Input() portCallId: number;
  @Input() cargoData: ConsignmentModel[];

  consignmentListSubscription: Subscription;
  dataIsPristineSubscription: Subscription;

  openConsignment: ConsignmentModel = null;
  consignmentCopy: ConsignmentModel = null;
  consignmentIsNew = false;
  saving = false;

  dataIsPristine = true;

  openCargoItem: CargoItemModel = null;
  cargoItemIsNew = false;

  consignmentWithTableDataList: any[] = [];

  modal: NgbModalRef;

  newConsignmentText = 'New Consignment';
  editConsignmentText = 'Edit Consignmment';
  consignmentModalHeader: string;
  newCargoItemText = 'New Cargo Item';
  editCargoItemText = 'Edit Cargo Item';
  cargoItemModalHeader: string;

  constructor(
    private cargoService: FalCargoService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    if (this.cargoData) {
      this.consignmentWithTableDataList = this.cargoData.map(c => {
        const obj = {
          consignmentModel: c,
          portOfLoadingData: null,
          portOfDischargeData: null
        };
        return obj;
      });
      this.setTableData();
    }
    this.dataIsPristineSubscription = this.cargoService.dataIsPristine$.subscribe(
      pristineData => {
        this.dataIsPristine = pristineData;
      }
    );
  }

  ngOnDestroy() {
    this.dataIsPristineSubscription.unsubscribe();
  }

  openModal(content, consignment = null, cargoItem = null) {
    this.consignmentIsNew = (consignment == null);
    this.consignmentModalHeader = this.consignmentIsNew ? this.newConsignmentText : this.editConsignmentText;
    this.cargoItemIsNew = (cargoItem == null);
    this.cargoItemModalHeader = this.cargoItemIsNew ? this.newCargoItemText : this.editCargoItemText;
    if (this.consignmentIsNew) {
      consignment = new ConsignmentModel();
    } else if (this.cargoItemIsNew) {
      cargoItem = new CargoItemModel();
      cargoItem.consignmentId = consignment.consignmentId;
    }
    this.openConsignment = consignment;
    this.consignmentCopy = JSON.parse(JSON.stringify(this.openConsignment));
    this.openCargoItem = cargoItem;
    this.modal = this.modalService.open(content, { size: 'lg' });
  }

  onDeleteCargoItem($event) {
    this.consignmentWithTableDataList = this.consignmentWithTableDataList.map(entry => {
      if (entry.consignmentModel.cargoItem && entry.consignmentModel.cargoItem.length > 0) {
        entry.consignmentModel.cargoItem = entry.consignmentModel.cargoItem.filter(item => item !== $event.cargoItemModel);
      }
      return entry;
    });
    this.touchData();
  }

  saveChanges() {
    this.saving = true;
    const consignmentList = this.consignmentWithTableDataList.map(entry => entry.consignmentModel);
    this.cargoService.setConsignmentListData(consignmentList);
    const formattedConsignmentList = this.cargoService.formatConsignment(consignmentList);
    this.cargoService.saveConsignmentListForPortCall(formattedConsignmentList, this.portCallId).subscribe(
      res => {
        this.cargoService.setDataIsPristine(true);
        this.saving = false;
      }, error => {
        this.saving = false;
        console.error(error);
      }
    );
  }


  saveConsignment() {
    this.openConsignment = Object.assign(this.openConsignment, this.consignmentCopy);
    this.openConsignment.portCallId = this.portCallId;
    let loading = null;
    let discharge = null;
    if (this.openConsignment.portOfLoading) {
      loading = this.portToTable(this.openConsignment.portOfLoading);
    }
    if (this.openConsignment.portOfDischarge) {
      discharge = this.portToTable(this.openConsignment.portOfDischarge);
    }
    const obj = {
      consignmentModel: this.openConsignment,
      portOfLoadingData: loading,
      portOfDischargeData: discharge
    };
    if (this.consignmentIsNew) {
      this.consignmentWithTableDataList.unshift(obj);
    }
    this.setTableData();
    this.touchData();
  }

  deleteConsignment() {
    this.consignmentWithTableDataList = this.consignmentWithTableDataList.filter(entry => entry.consignmentModel !== this.openConsignment);
    this.touchData();
  }

  saveCargoItem() {
    if (this.cargoItemIsNew) {
      if (this.openConsignment.cargoItem == null) {
        this.openConsignment.cargoItem = [];
      }
      this.openConsignment.cargoItem = [...this.openConsignment.cargoItem, this.openCargoItem];
    }
    this.touchData();
  }

  setTableData() {
    this.consignmentWithTableDataList.forEach(entry => {
      if (entry.consignmentModel.portOfLoading) {
        entry.portOfLoadingData = this.portToTable(entry.consignmentModel.portOfLoading);
      } else {
        entry.portOfLoadingData = null;
      }
      if (entry.consignmentModel.portOfDischarge) {
        entry.portOfDischargeData = this.portToTable(entry.consignmentModel.portOfDischarge);
      } else {
        entry.portOfDischargeData = null;
      }
    });
  }

  portToTable(port: LocationModel) {
    const portOfLoadingData = new LocationProperties().getPropertyList();
    LocationProperties.setLocationData(portOfLoadingData, port);
    if (port.country) {
      LocationProperties.setCountry(portOfLoadingData, port.country.name, port.country.twoCharCode.toLowerCase() + '.png');
    }
    return portOfLoadingData;
  }

  touchData() {
    const consignmentList = this.consignmentWithTableDataList.map(entry => entry.consignmentModel);
    this.cargoService.setConsignmentListData(consignmentList);
    this.cargoService.setDataIsPristine(false);
  }

}
