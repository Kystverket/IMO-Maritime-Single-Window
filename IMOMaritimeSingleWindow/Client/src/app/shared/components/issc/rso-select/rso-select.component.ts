import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OrganizationModel } from '../../../models/organization-model';
import { OrganizationService } from '../../../services/organization.service';

@Component({
  selector: 'app-rso-select',
  templateUrl: './rso-select.component.html',
  styleUrls: ['./rso-select.component.css']
})
export class RsoSelectComponent implements OnInit {

  @Input() organizationModel: OrganizationModel;
  @Output() organizationResult = new EventEmitter<OrganizationModel>();

  rsoList: OrganizationModel[] = [];

  rsoListSubscription: Subscription;

  constructor(
    private organizationService: OrganizationService
  ) { }

  ngOnInit() {
    this.rsoListSubscription = this.organizationService.getRecognizedSecurityOrganizations().subscribe(
      result => {
        this.rsoList = result;
      }
    );
  }

  organizationChanged(organization) {
    this.organizationResult.emit(this.organizationModel);
  }

}
