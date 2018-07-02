import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ConstantsService } from 'app/shared/services/constants.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortCallShipStoresService } from 'app/shared/services/port-call-ship-stores.service';
import { ContentService } from '../../../../../../../shared/services/content.service';
import { FORM_NAMES } from 'app/shared/constants/form-names';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css'],
  providers: [ConstantsService]
})
export class DeleteButtonComponent implements OnInit, ViewCell {

  @Input() value: string | number;
  @Input() rowData: any;

  selectedForm: string;
  formNames: any;

  constructor(
    private modalService: NgbModal,
    private shipStoresService: PortCallShipStoresService,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.formNames = FORM_NAMES;

    this.contentService.portCallFormName$.subscribe(name => {
      this.selectedForm = name;
      console.log(name);
      console.log(this.formNames);

    });
  }

  onDeleteClick(content: any) {
    this.modalService.open(content);
  }

  deleteShipStoreEntry() {
    this.shipStoresService.deleteShipStoreEntry(this.rowData);

  }

}
