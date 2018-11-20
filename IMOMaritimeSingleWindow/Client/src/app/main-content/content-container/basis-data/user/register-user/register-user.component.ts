import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { OrganizationProperties } from 'app/shared/constants/organization-properties';
import { AccountService, ContentService, OrganizationService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';
import { OrganizationModel, UserModel } from '../../../../../shared/models/';

const RESULT_SUCCESS = 'User was successfully registered.';
const RESULT_FAILURE = 'There was a problem when trying to register the user. Please try again later.';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [AccountService]
})
export class RegisterUserComponent implements OnInit, OnDestroy {


  newUser = false;
  userHeader: string;
  confirmHeader: string;
  confirmButtonTitle: string;

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
  userDataSubscription: Subscription;

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

    this.userDataSubscription = this.accountService.userData$.subscribe(data => {
      
      if (data) {
        this.setAllValues(data);
      } else if (!this.newUser) {
        // this.newShip = true;
        // this.shipHeader = 'Register New Ship';
        // this.confirmHeader = 'Confirm Ship Registration';
        // this.confirmButtonTitle = 'Register Ship';
      }
    });

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

  setAllValues(user: UserModel) {
    this.newUser = false;
    this.userHeader = 'Edit Ship';
    this.confirmHeader = 'Confirm Ship Changes';
    this.confirmButtonTitle = 'Apply Changes';
    this.user = user;
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

  registerUser() {
    this.accountService.registerUser(this.user)
    .subscribe(
      result => {
        this.openConfirmationModal(ConfirmationModalComponent.TYPE_SUCCESS, RESULT_SUCCESS);
          // this.openCustomModal(template, true);  // SUCCESS
      },
      error => {
        this.openConfirmationModal(ConfirmationModalComponent.TYPE_FAILURE, RESULT_FAILURE);
        // this.openCustomModal(template, false);  // FAILURE
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
