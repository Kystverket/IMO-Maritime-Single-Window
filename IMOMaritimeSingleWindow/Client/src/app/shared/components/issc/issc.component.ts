import { Component, OnInit, Input } from '@angular/core';
import { InternationalShipSecurityCertificateModel } from '../../models/international-ship-security-certificate-model';
import { NgbDate } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { CountryModel } from '../../models/country-model';
import { OrganizationModel } from '../../models/organization-model';
import { ShipService } from '../../services/ship.service';

@Component({
  selector: 'app-issc',
  templateUrl: './issc.component.html',
  styleUrls: ['./issc.component.css']
})
export class IsscComponent implements OnInit {
  @Input() isscModel: InternationalShipSecurityCertificateModel;
  expiryDateModel: NgbDate;
  rsoIssuer: OrganizationModel = null;
  governmentIssuer: CountryModel = null;
  issuerTypeList = [
    {
      name: 'Government',
      isGovernmentType: true
    },
    {
      name: 'Recognized Security Organization (RSO)',
      isGovernmentType: false
    }
  ];

  constructor(
    private shipService: ShipService
  ) { }

  ngOnInit() {
    this.validateData();
    if (this.isscModel.expiryDate) {
      this.setNgbDate();
    }
    if (this.isscModel.issuedByGovernment && this.isscModel.governmentIssuer) {
      this.governmentIssuer = this.isscModel.governmentIssuer;
    } else if (this.isscModel.rsoIssuer) {
      this.rsoIssuer = this.isscModel.rsoIssuer;
    }
  }

  setNgbDate() {
    const expiryDate = new Date(this.isscModel.expiryDate);
    this.expiryDateModel = new NgbDate(expiryDate.getFullYear(), expiryDate.getMonth() + 1, expiryDate.getDate());
  }

  onExpiryDateSelection(date: NgbDate) {
    this.isscModel.expiryDate = (date != null) ? new Date(Date.UTC(date.year, date.month - 1, date.day)) : null;
    this.touchData();
  }

  onIssuerTypeSelection(issuerType) {
    if (this.isscModel.issuedByGovernment) {
      this.isscModel.rsoIssuerId = null;
    } else {
      this.isscModel.governmentIssuerId = null;
    }
    this.touchData();
  }

  onCountrySelection(country: CountryModel) {
    this.isscModel.governmentIssuerId = country.countryId;
    this.touchData();
  }

  onOrganizationSelection(organization: OrganizationModel) {
    this.isscModel.rsoIssuerId = organization.organizationId;
    this.touchData();
  }

  touchData() {
    this.shipService.setIsscPristineData(false);
    this.validateData();
  }

  private validateData() {
    this.shipService.setValidIsscData(this.dataIsValid());
  }

  private dataIsValid() {
    return this.isscModel != null
      && this.isscModel.certificateNumber != null && this.isscModel.certificateNumber.length > 0
      && this.isscModel.expiryDate != null
      && this.isscModel.issuedByGovernment != null
      && (this.isscModel.governmentIssuerId != null || this.isscModel.rsoIssuerId != null);
  }

}
