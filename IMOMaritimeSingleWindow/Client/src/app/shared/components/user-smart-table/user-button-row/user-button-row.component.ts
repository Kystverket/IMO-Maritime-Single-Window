import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { AccountService, ContentService } from 'app/shared/services/';
import { ViewCell } from 'ng2-smart-table';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-user-button-row',
  templateUrl: './user-button-row.component.html',
  styleUrls: ['./user-button-row.component.css']
})
export class UserButtonRowComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() statusChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private accountService: AccountService,
    private contentService: ContentService,
    private modalService: NgbModal
  ) { }

  ngOnInit() { }

  onEditClick() {
    this.setContent(CONTENT_NAMES.REGISTER_USER);
  }

  onStatusToggleClick():void {
    if(this.rowData.userModel.isActive)
      this.openConfirmationModal('confirm', 'Diactivate selected user account?');
    else
      this.openConfirmationModal('confirm', 'Activate selected user account?');
  }

  private setContent(content: string) {
    this.setUser(content);
  }

  setUser(content) {
    // this.contentService.setLoadingScreen(true, 'ship.gif', 'Loading');
    this.accountService.setUserData(this.rowData.userModel);
    this.contentService.setContent(content);
    /*
    this.accountService.getUserByEmail(this.rowData.userModel.email).subscribe(data => {
      if (data) {
        this.accountService.setUserData(this.rowData.userModel);
        this.contentService.setContent(content);
      }
    });
    */
  }

  private openConfirmationModal(modalType: string, bodyText: string) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.modalType = modalType;
    modalRef.componentInstance.bodyText = bodyText;
    modalRef.componentInstance.modalStyle = ConfirmationModalComponent.CONFIRM_MODAL;

    modalRef.result.then(
      closeResult => {
        if (closeResult == 'proceed') { 

          let apiCall = null;

          if(this.rowData.userModel.isActive)
            apiCall = this.accountService.deactivateUser(this.rowData.userModel.id);
          else
            apiCall = this.accountService.activateUser(this.rowData.userModel.id);

          apiCall.subscribe((apiResult) => {
            this.rowData.userModel.isActive = (!this.rowData.userModel.isActive);
            const resultModalRef = this.modalService.open(ConfirmationModalComponent);
            resultModalRef.componentInstance.modalType = "Result";
            resultModalRef.componentInstance.bodyText = (this.rowData.userModel.isActive) ? "User Account Deactivated" : "User Account Activated";

          });
        }
      }
    );
  }

}
