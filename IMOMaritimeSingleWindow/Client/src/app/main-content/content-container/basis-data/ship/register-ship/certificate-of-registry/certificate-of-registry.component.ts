import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CertificateOfRegistryService } from 'app/main-content/content-container/basis-data/ship/register-ship/certificate-of-registry/certificate-of-registry.service';
import { CertificateOfRegistryModel } from 'app/shared/models/certificate-of-registry-model';
import { SearchLocationComponent } from 'app/shared/components/search-location/search-location.component';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { LocationModel } from 'app/shared/models/location-model';

@Component({
  selector: 'app-certificate-of-registry',
  templateUrl: './certificate-of-registry.component.html',
  styleUrls: ['./certificate-of-registry.component.css'],
  providers: [CertificateOfRegistryService]
})
export class CertificateOfRegistryComponent implements OnInit, AfterViewInit {
  @ViewChild(SearchLocationComponent) searchLocationComponent: SearchLocationComponent;

  certificateModel: CertificateOfRegistryModel;
  dateOfIssueModel: NgbDate;
  selectedPort: LocationModel;
  portLocationSelected = false;
  validCertificateDateFormat = true;
  countryName: string;
  locationName: string;
  locationCode: string;
  locationTypeName: string;
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
          this.countryName = this.certificateModel.portLocation.country.name || '';
          this.locationName = this.certificateModel.portLocation.name || '';
          this.locationCode = this.certificateModel.portLocation.locationCode || '';
          this.locationTypeName = this.certificateModel.portLocation.locationType.name || '';
          this.portLocationSelected = true;
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

  ngAfterViewInit() {

    this.searchLocationComponent.getService().locationData$.subscribe(data => {
      if (data) {
        this.selectedPort = data;
        this.countryName = data.country.name || '';
        this.locationName = data.name || '';
        this.locationCode = data.locationCode || '';
        this.locationTypeName = data.locationType.name || '';
        this.portLocationSelected = true;
      } else {
        this.portLocationSelected = false;
        this.selectedPort = null;
      }
      this.persistData();
    });

    setTimeout(() => {
      if (this.certificateModel.portLocation) {
        this.searchLocationComponent.getService().setLocationData(this.certificateModel.portLocation);
      }
    });
  }

  deselectPortLocation() {
    this.portLocationSelected = false;
    this.certificateModel.portLocation = null;
    this.searchLocationComponent.getService().setLocationData(null);
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
