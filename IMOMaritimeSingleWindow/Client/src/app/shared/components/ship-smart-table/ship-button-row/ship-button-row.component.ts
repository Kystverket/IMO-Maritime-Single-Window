import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { SHIP_STATUSES } from 'app/shared/constants/enumValues';
import { ContentService, ShipService } from 'app/shared/services/';
import { ViewCell } from 'ng2-smart-table';

const RESULT_SUCCESS = 'Ship status was successfully updated.';
const RESULT_FAILURE = 'There was a problem when trying to save the ship to the database. Please try again later.';

@Component({
  selector: 'app-ship-button-row',
  templateUrl: './ship-button-row.component.html',
  styleUrls: ['./ship-button-row.component.css']
})
export class ShipButtonRowComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();



  constructor(
    private shipService: ShipService,
    private contentService: ContentService,
    private modalService: NgbModal
  ) { }

  ngOnInit() { }

  onEditClick() {
    this.setContent(CONTENT_NAMES.REGISTER_SHIP);
  }

  onDeactivateClick() {
    const shipModel = this.rowData.shipModel;
    this.shipService.getShipStatusByEnum(SHIP_STATUSES.INACTIVE)
    .finally(() => {
      this.shipService.updateShip(shipModel).subscribe(res => {
        this.openConfirmationModal(
          ConfirmationModalComponent.TYPE_SUCCESS,
          RESULT_SUCCESS
        );      }, error => {
        this.openConfirmationModal(
          ConfirmationModalComponent.TYPE_FAILURE,
          RESULT_FAILURE
        );
      });
    })
    .subscribe(res => {
      shipModel.shipStatusId = res.shipStatusId;
    });
  }

  private setContent(content: string) {
    this.setShip(content);
  }

  setShip(content) {
    this.contentService.setLoadingScreen(true, 'ship.gif', 'Loading');
    this.shipService.getShip(this.rowData.shipModel.shipId).subscribe(data => {
      if (data) {
        this.shipService.setShipData(data);
        this.contentService.setContent(content);
      }
    });
  }

  private goBack() {
    this.contentService.setContent(CONTENT_NAMES.VIEW_SHIPS);
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  private openConfirmationModal(modalType: string, bodyText: string) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.modalType = modalType;
    modalRef.componentInstance.bodyText = bodyText;
    modalRef.result.then(
      result => {
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) {
          this.goBack();
        }
      },
      reason => {
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) {
          this.goBack();
        }
      }
    );
  }

}

