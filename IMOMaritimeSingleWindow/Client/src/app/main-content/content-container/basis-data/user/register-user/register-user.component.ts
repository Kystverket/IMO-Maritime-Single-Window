import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { UserModelWithPassword } from 'app/shared/models/user-model-with-password';
import { AccountService } from 'app/shared/services/account.service';
import { ContentService } from 'app/shared/services/content.service';
import { OrganizationProperties } from 'app/shared/constants/organization-properties';
import { Subscription } from 'rxjs/Subscription';

const RESULT_SUCCES = 'User was successfully registered.';
const RESULT_FAILURE = 'There was a problem when trying to register the user. Please try again later.';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [AccountService]
})
export class RegisterUserComponent implements OnInit, OnDestroy {

  user: UserModelWithPassword = {
    email: '',
    phoneNumber: '',
    givenName: '',
    surname: '',
    password: '',
    roleName: '',
    organizationId: '',
    companyEmail: '',
    companyPhoneNumber: ''
  };
  emailTaken: boolean;
  emailChecked: boolean;

  organizationModel: any;
  organizationSelected: boolean;
  organizationProperties = new OrganizationProperties().getPropertyList();

  roleList: any[];
  selectedRole: any;

  getAllRolesSubscription: Subscription;

  constructor(
    private accountService: AccountService,
    private contentService: ContentService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getAllRolesSubscription = this.accountService.getAllRoles().subscribe(
      data => this.roleList = data
    );

    this.getEmailLink();
  }

  ngOnDestroy() {
    this.getAllRolesSubscription.unsubscribe();
  }

  getEmailLink() {
    this.accountService.getEmailLink().subscribe(result => {
      if (result) {
      }
    });
  }

  userExists(emailValid: boolean) {
    if (emailValid) {
      return this.accountService.emailTaken(this.user.email)
        .subscribe(result => {
          this.emailTaken = result;
          this.emailChecked = true;
        });
    }
  }

  registerUserWithPassword() {
    this.accountService.registerUser(this.user)
      .subscribe(
        result => {
          if (result) {
            console.log(result);
            this.openConfirmationModal(ConfirmationModalComponent.TYPE_SUCCESS, RESULT_SUCCES);
          }
        },
        error => {
          console.log(error);
          this.openConfirmationModal(ConfirmationModalComponent.TYPE_FAILURE, RESULT_FAILURE);
        }
      );
  }

  onOrganizationResult(organizationResult) {
    this.setOrganization(organizationResult);
  }

  setOrganization(organizationData) {
    this.organizationModel = organizationData;
    this.user.organizationId = organizationData.organizationId;
    this.organizationSelected = true;
    OrganizationProperties.setOrganizationData(this.organizationProperties, this.organizationModel);
  }

  deselectOrganization() {
    this.organizationModel = null;
    this.user.organizationId = null;
    this.organizationSelected = false;
  }

  private goBack() {
    this.contentService.setContent(CONTENT_NAMES.VIEW_PORT_CALLS);
  }

  private openConfirmationModal(modalType: string, bodyText: string) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.modalType = modalType;
    modalRef.componentInstance.bodyText = bodyText;
    modalRef.result.then(
      result => {
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) { this.goBack(); }
      },
      reason => {
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) { this.goBack(); }
      }
    );
  }


}
