import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ConstantsService } from 'app/shared/services/constants.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortCallShipStoresService } from 'app/shared/services/port-call-ship-stores.service';
import { ContentService } from '../../../../../../../shared/services/content.service';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css'],
  providers: [ConstantsService]
})
export class DeleteButtonComponent implements OnInit, ViewCell {

  @Input() value: string | number;
  @Input() rowData: any;

  formName: string;
  contentNames = CONTENT_NAMES;

  constructor(
    private modalService: NgbModal,
    private shipStoresService: PortCallShipStoresService,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.contentService.portCallFormName$.subscribe(name => {
      this.formName = name;
      console.log(name);
      console.log(this.contentNames);

    });
  }

  onDeleteClick(content: any) {
    this.modalService.open(content);
  }

  deleteShipStoreEntry() {
    this.shipStoresService.deleteShipStoreEntry(this.rowData);

  }

}
