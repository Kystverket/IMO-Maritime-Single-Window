import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ConstantsService } from 'app/shared/services/constants.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';
import { ContentService } from 'app/shared/services/content.service';
import { FORM_NAMES } from 'app/shared/constants/form-names';
import { PortCallPassengerListService } from 'app/shared/services/port-call-fal-passenger-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css'],
  providers: [ConstantsService]
})
export class DeleteButtonComponent implements OnInit, OnDestroy, ViewCell {

  @Input() value: string | number;
  @Input() rowData: any;
  @Output() delete = new EventEmitter<any>();

  selectedForm: string;
  formNames: any;

  portCallFormNameSubscription: Subscription;

  constructor(
    private modalService: NgbModal,
    private shipStoresService: FalShipStoresService,
    private passengerService: PortCallPassengerListService,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.formNames = FORM_NAMES;

    this.portCallFormNameSubscription = this.contentService.portCallFormName$.subscribe(name => {
      this.selectedForm = name;
    });
  }

  ngOnDestroy() {
    this.portCallFormNameSubscription.unsubscribe();
  }

  onDeleteClick(content: any) {
    this.modalService.open(content);
  }

  deleteItem() {
    console.log(this.rowData);
    this.delete.emit(this.rowData);
  }

}
