import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { CertificateOfRegistryModel } from 'app/shared/models/';

@Component({
  selector: 'app-certificate-of-registry',
  templateUrl: './certificate-of-registry.component.html',
  styleUrls: ['./certificate-of-registry.component.css']
})
export class CertificateOfRegistryComponent implements OnInit {

  @Input() certificateModel: CertificateOfRegistryModel;

  @Output() certificateResult = new EventEmitter<CertificateOfRegistryModel>();

  dateOfIssueModel: NgbDate;
  validCertificateDateFormat = true;

  portLocationSelected = false;
  locationProperties = new LocationProperties().getPropertyList();

  constructor() { }

  ngOnInit() {
    if (this.certificateModel == null) {
      this.certificateModel = new CertificateOfRegistryModel();
    } else {
      if (this.certificateModel.dateOfIssue) {
        const date = new Date(this.certificateModel.dateOfIssue);
        this.dateOfIssueModel = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
      }
      if (this.certificateModel.portLocation) {
        this.portLocationSelected = true;
        this.setLocationProperties(this.certificateModel.portLocation);
      }
    }
  }

  onLocationResult(locationResult) {
    this.certificateModel.portLocation = locationResult;
    this.certificateModel.portLocationId = locationResult.locationId;
    this.portLocationSelected = true;
    this.setLocationProperties(this.certificateModel.portLocation);

    this.persistData();
  }

  deselectPortLocation() {
    this.portLocationSelected = false;
    this.certificateModel.portLocation = null;
    this.certificateModel.portLocationId = null;
    this.persistData();
  }

  private setLocationProperties(locationModel) {
    LocationProperties.setLocationData(this.locationProperties, locationModel);
    const twoCharCode = locationModel.country.twoCharCode.toLowerCase() || 'xx';
    const countryFlag = twoCharCode + '.png';
    LocationProperties.setCountry(this.locationProperties, locationModel.country.name, countryFlag);
  }

  private persistData() {
    this.certificateResult.emit(this.certificateModel);
  }

  certificateDateChanged($event) {
    this.validCertificateDateFormat = this.hasValidDateFormat($event);
    if (this.validCertificateDateFormat && $event != null) {
      this.certificateModel.dateOfIssue = new Date(this.dateOfIssueModel.year, this.dateOfIssueModel.month - 1, this.dateOfIssueModel.day);
    } else {
      this.certificateModel.dateOfIssue = null;
    }
    this.persistData();
  }

  private hasValidDateFormat(model): boolean {
    return typeof model !== 'string';
  }
}
