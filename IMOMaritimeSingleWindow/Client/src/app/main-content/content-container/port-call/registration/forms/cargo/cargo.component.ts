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
  styleUrls: ['./cargo.component.css'],
  providers: [FalCargoService]
})
export class CargoComponent implements OnInit, OnDestroy {
  @Input() portCallId: number;

  getConsignmentListSubscription: Subscription;

  openConsignment: ConsignmentModel = null;
  consignmentCopy: ConsignmentModel = null;
  consignmentIsNew = false;
  saving = false;

  openCargoItem: CargoItemModel = null;
  cargoItemIsNew = false;

  consignmentWithTableDataList: any[] = [];

  modal: NgbModalRef;

  consignmentModalHeaderPlaceholder = 'New Consignment';
  cargoItemModalHeaderPlaceholder = 'New Cargo Item';

  constructor(
    private cargoService: FalCargoService,
    private modalService: NgbModal
  ) { }

  openModal(content, consignment = null, cargoItem = null) {
    this.consignmentIsNew = (consignment == null);
    this.cargoItemIsNew = (cargoItem == null);
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
      return consignment;
    });
    this.cargoService.saveConsignmentListForPortCall(consignmentList, this.portCallId).subscribe(
      res => {
        this.saving = false;
        console.log(res);
      }, error => {
        this.saving = false;
        console.error(error);
      }
    );
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
  }

  saveCargoItem() {
    if (this.cargoItemIsNew) {
      if (this.openConsignment.cargoItem == null) {
        this.openConsignment.cargoItem = [];
      }
      this.openConsignment.cargoItem = [...this.openConsignment.cargoItem, this.openCargoItem];
    }
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

  ngOnInit() {
    this.getConsignmentListSubscription = this.cargoService.getConsignmentListForPortCall(this.portCallId).subscribe(
      consignmentListResult => {
        if (consignmentListResult) {
          this.consignmentWithTableDataList = consignmentListResult.map(c => {
            const obj = {
              consignmentModel: c,
              portOfLoadingData: null,
              portOfDischargeData: null
            };
            return obj;
          });
          this.setTableData();
        }
      }
    );
  }

  ngOnDestroy() {
  }

}
