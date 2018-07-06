import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { PrevAndNextPocService } from '../../../../../shared/services/prev-and-next-poc.service';
import { PortCallShipStoresService } from '../../../../../shared/services/port-call-ship-stores.service';
import { FORM_NAMES } from 'app/shared/constants/form-names';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  formNames = FORM_NAMES;

  iconPath = 'assets/images/VoyageIcons/128x128/white/';
  baseMenuEntries: any[] = [
    {
      name: this.formNames.PREV_AND_NEXT_POC,
      icon: 'voyage.png',
      checked: true,
      hasError: false,
      hasUnsavedData: false
    },
    {
      name: this.formNames.PORT_CALL_DETAILS,
      icon: 'verification-clipboard.png',
      checked: true,
      hasError: false,
      hasUnsavedData: false
    }
  ];
  finalMenuEntries: any[] = [
    {
      name: this.formNames.CONFIRM_PORT_CALL,
      icon: 'checkmark.png',
      checked: true,
      hasError: false,
      hasUnsavedData: false
    }
  ];

  menuEntries: any[];

  selectedPortCallForm: string;

  constructor(
    private portCallService: PortCallService,
    private prevAndNextPortCallService: PrevAndNextPocService,
    private contentService: ContentService,
    private shipStoresService: PortCallShipStoresService
  ) { }

  ngOnInit() {

    console.log(this.formNames.PORT_CALL_DETAILS);

    this.menuEntries = this.baseMenuEntries.concat(this.finalMenuEntries);
    this.portCallService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData != null) {
          const falForms = [
            {
              name: this.formNames.DPG,
              icon: 'hazard.png',
              checked: reportingData.reportingDpg || false,
              hasError: false,
              hasUnsavedData: false
            },
            {
              name: this.formNames.CARGO,
              icon: 'cargo.png',
              checked: reportingData.reportingCargo || false,
              hasError: false,
              hasUnsavedData: false
            },
            {
              name: this.formNames.SHIP_STORES,
              icon: 'alcohol.png',
              checked: reportingData.reportingShipStores || false,
              hasError: false,
              hasUnsavedData: false
            },
            {
              name: this.formNames.CREW,
              icon: 'crew.png',
              checked: reportingData.reportingCrew || false,
              hasError: false,
              hasUnsavedData: false
            },
            {
              name: this.formNames.PAX,
              icon: 'pax.png',
              checked: reportingData.reportingPax || false,
              hasError: false,
              hasUnsavedData: false
            }
          ];
          this.menuEntries = this.baseMenuEntries
            .concat(falForms)
            .concat(this.finalMenuEntries);

          // Set checked in services for FAL forms
          this.shipStoresService.setCheckedInProgressBar(reportingData.reportingShipStores);
        }
      }
    );

    this.contentService.portCallFormName$.subscribe(
      portCallFormName => {
        this.selectedPortCallForm = portCallFormName;
      }
    );

    this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(
      metaData => {
        this.menuEntries.find(
          p => p.name === this.formNames.PORT_CALL_DETAILS
        ).hasError = !metaData.valid;
      }
    );

    this.prevAndNextPortCallService.dataIsPristine$.subscribe(
      pristineData => {
        this.menuEntries.find(
          p => p.name === this.formNames.PREV_AND_NEXT_POC
        ).hasUnsavedData = !pristineData;
      }
    );

    this.portCallService.detailsPristine$.subscribe(
      detailsDataIsPristine => {
        this.menuEntries.find(
          p => p.name === this.formNames.PORT_CALL_DETAILS
        ).hasUnsavedData = !detailsDataIsPristine;
      }
    );
    this.portCallService.detailsPristine$.subscribe(detailsDataIsPristine => {
      this.menuEntries.find(
        p => p.name === this.formNames.PORT_CALL_DETAILS
      ).hasUnsavedData = !detailsDataIsPristine;
    });

    this.shipStoresService.dataIsPristine$.subscribe(shipStoresDataIsPristine => {
      const shipStores = this.menuEntries.find(
        p => p.name === this.formNames.SHIP_STORES
      );
      if (shipStores) {
        shipStores.hasUnsavedData = !shipStoresDataIsPristine;
      }

    });
  }

  setPortCallForm(contentName: string) {
    this.contentService.setPortCallForm(contentName);
  }
}
