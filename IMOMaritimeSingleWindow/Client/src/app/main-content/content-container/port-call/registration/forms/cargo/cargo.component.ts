import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ConsignmentModel } from 'app/shared/models/consignment-model';
import { FalCargoService } from '../../../../../../shared/services/fal-cargo.service';
import { Subscription } from '../../../../../../../../node_modules/rxjs/Subscription';
import { NgbModal, NgbModalRef } from '../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { LocationProperties } from '../../../../../../shared/constants/location-properties';
import { LocationModel } from 'app/shared/models/location-model';
import { CargoItemModel } from 'app/shared/models/cargo-item-model';

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

  saveChanges() {
    this.saving = true;
    const consignmentList = this.consignmentWithTableDataList.map(entry => {
      const consignment = new ConsignmentModel();
      consignment.portCallId = this.portCallId;
      consignment.name = entry.consignmentModel.name;
      consignment.portOfLoadingId = entry.consignmentModel.portOfLoadingId;
      consignment.portOfDischargeId = entry.consignmentModel.portOfDischargeId;
      consignment.remark = entry.consignmentModel.remark;
      if (entry.consignmentModel.cargoItem) {
        consignment.cargoItem = entry.consignmentModel.cargoItem.map(item => {
          const returnItem = new CargoItemModel();
          returnItem.shippingMarks = item.shippingMarks;
          returnItem.containerIdentification = item.containerIdentification;
          returnItem.description = item.description;
          returnItem.grossVolume = item.grossVolume;
          returnItem.grossWeight = item.grossWeight;
          returnItem.hsCode = item.hsCode;
          returnItem.numberOfPackages = item.numberOfPackages;
          returnItem.packageTypeId = item.packageTypeId;
          return returnItem;
        });
      }
      return consignment;
    });
    this.cargoService.setConsignmentListData(this.consignmentWithTableDataList.map(entry => entry.consignmentModel));
    this.cargoService.saveConsignmentListForPortCall(consignmentList, this.portCallId).subscribe(
      res => {
        this.cargoService.setDataIsPristine(true);
        this.saving = false;
        console.log(res);
      }, error => {
        this.cargoService.setDataIsPristine(true);
        this.saving = false;
        console.error(error);
      }
    );
  }

  touchData() {
    const consignmentList = this.consignmentWithTableDataList.map(entry => entry.consignmentModel);
    this.cargoService.setConsignmentListData(consignmentList);
    this.cargoService.setDataIsPristine(false);
  }

  saveConsignment() {
    this.openConsignment = Object.assign(this.openConsignment, this.consignmentCopy);
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


}
