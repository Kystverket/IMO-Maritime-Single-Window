import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { CertificateOfRegistryService } from 'app/main-content/content-container/basis-data/ship/register-ship/certificate-of-registry/certificate-of-registry.service';
import { CertificateOfRegistryModel } from 'app/shared/models/certificate-of-registry-model';
import { LocationModel } from 'app/shared/models/location-model';
import { LocationProperties } from 'app/shared/constants/location-properties';

@Component({
  selector: 'app-certificate-of-registry',
  templateUrl: './certificate-of-registry.component.html',
  styleUrls: ['./certificate-of-registry.component.css'],
  providers: [CertificateOfRegistryService]
})
export class CertificateOfRegistryComponent implements OnInit {

  certificateModel: CertificateOfRegistryModel;
  dateOfIssueModel: NgbDate;
  selectedPort: LocationModel;
  portLocationSelected = false;
  validCertificateDateFormat = true;

  locationProperties = new LocationProperties().getPropertyList();

  constructor(private certificateService: CertificateOfRegistryService) { }

  ngOnInit() {
    this.certificateModel = new CertificateOfRegistryModel();
    this.certificateService.certificateData$.subscribe(data => {
      if (data) {
        this.certificateModel = data;
        if (this.certificateModel.dateOfIssue) {
          const date = new Date(this.certificateModel.dateOfIssue);
          this.dateOfIssueModel = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
        }
        if (this.certificateModel.portLocation) {
          this.portLocationSelected = true;
          this.setLocationData(this.certificateModel.portLocation);
        } else {
          this.portLocationSelected = false;
        }
      }
    });

    this.certificateService.validDateFormatData$.subscribe(data => {
      if (data != null) {
        this.validCertificateDateFormat = data;
      }
    });
  }

  onLocationResult(locationResult) {
    if (locationResult) {
      this.selectedPort = locationResult;
      this.portLocationSelected = true;
      this.setLocationData(this.selectedPort);
    } else {
      this.portLocationSelected = false;
      this.selectedPort = null;
    }
    this.persistData();
  }

  deselectPortLocation() {
    this.portLocationSelected = false;
    this.certificateModel.portLocation = null;
  }

  private setLocationData(locationModel) {
    LocationProperties.setLocationData(this.locationProperties, locationModel);
    const twoCharCode = locationModel.country.twoCharCode.toLowerCase() || 'xx';
    const countryFlag = twoCharCode + '.png';
    LocationProperties.setCountry(this.locationProperties, locationModel.country.name, countryFlag);
  }

  persistData() {
    if (this.selectedPort && this.certificateModel) {
      this.certificateModel.portLocation = this.selectedPort;
      this.certificateModel.portLocationId = this.selectedPort.locationId;
      this.portLocationSelected = true;
    }
    if (this.certificateModel) {
      this.certificateService.setCertificateData(this.certificateModel);
    }
  }

  updateCertificateDate($event) {
    if (this.hasValidDateFormat($event)) {
      this.certificateService.setValidDateFormatData(true);
      this.certificateModel.dateOfIssue = new Date(this.dateOfIssueModel.year, this.dateOfIssueModel.month - 1, this.dateOfIssueModel.day);
    } else {
      this.certificateModel.dateOfIssue = null;
      this.certificateService.setValidDateFormatData(false);
    }
    this.persistData();
  }

  private hasValidDateFormat(model): boolean {
    return typeof model !== 'string' && model != null;
  }

  getService() {
    return this.certificateService;
  }

}
