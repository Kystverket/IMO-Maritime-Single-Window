import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { AccountService } from 'app/shared/services/account.service';
import { ContentService } from 'app/shared/services/content.service';
import { OrganizationService } from 'app/shared/services/organization.service';
import { UserModel } from '../../../../../shared/models/user-model';
import { OrganizationProperties } from 'app/shared/constants/organization-properties';
import { Subscription } from 'rxjs/Subscription';

const RESULT_SUCCESS = 'User was successfully registered.';
const RESULT_FAILURE = 'There was a problem when trying to register the user. Please try again later.';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [AccountService]
})
export class RegisterUserComponent implements OnInit, OnDestroy {

  user: UserModel = {
    email: '',
    phoneNumber: '',
    givenName: '',
    surname: '',
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

  registrationSuccessful: boolean;
  emailConfirmationLink: string;

  constructor(
    private accountService: AccountService,
    private contentService: ContentService,
    private modalService: NgbModal,
    private organizationService: OrganizationService
  ) { }

  ngOnInit() {
    this.getAllRolesSubscription = this.accountService.getAllRoles()
    .subscribe(
      data => this.roleList = data
    );

    this.organizationService.setOrganizationData(null);
    this.organizationService.organizationData$.subscribe(
      data => {
        if (data) {
          this.organizationModel = data;
          this.user.organizationId = data.organizationId;
          this.organizationSelected = true;
        } else {
          this.organizationSelected = false;
        }
      }
    );
  }

  ngOnDestroy() {
    this.getAllRolesSubscription.unsubscribe();
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

  registerUser(template: any) {
    this.accountService.registerUser(this.user)
    .subscribe(
      result => {
        if (result) {
          console.log(result);
          console.log('Link to password set form:', result.text());
          this.emailConfirmationLink = result.text();
          this.openCustomModal(template, true); // SUCCESS
          // this.openConfirmationModal(ConfirmationModalComponent.TYPE_SUCCESS, RESULT_SUCCESS);
        }
      },
      error => {
        console.log(error);
        this.openCustomModal(template, false);  // FAILURE
        // this.openConfirmationModal(ConfirmationModalComponent.TYPE_FAILURE, RESULT_FAILURE);
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

  private openCustomModal(template: any, success: boolean) {
    this.registrationSuccessful = success;
    this.modalService.open(template);
  }

}
