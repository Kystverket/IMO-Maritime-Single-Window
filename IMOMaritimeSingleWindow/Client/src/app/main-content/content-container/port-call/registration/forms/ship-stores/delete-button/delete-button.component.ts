import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ConstantsService } from 'app/shared/services/constants.service';
import { PortCallClaims } from 'app/shared/constants/port-call-claims';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortCallShipStoresService } from 'app/shared/services/port-call-ship-stores.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css'],
  providers: [ConstantsService]
})
export class DeleteButtonComponent implements OnInit, ViewCell {

  @Input() value: string | number;
  @Input() rowData: any;

  constructor(
    private modalService: NgbModal,
    private shipStoresService: PortCallShipStoresService
  ) { }

  ngOnInit() {
  }

  onDeleteClick(content: any) {
    this.modalService.open(content);
  }

  deleteShipStore() {
    this.shipStoresService.deleteShipStore(this.rowData);
  }

}
