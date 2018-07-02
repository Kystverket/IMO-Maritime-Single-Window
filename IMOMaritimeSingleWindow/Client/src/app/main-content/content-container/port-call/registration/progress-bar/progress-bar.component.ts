import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { PrevAndNextPocService } from '../../../../../shared/services/prev-and-next-poc.service';
import { PortCallShipStoresService } from '../../../../../shared/services/port-call-ship-stores.service';

const PREV_AND_NEXT_POC = 'Voyages';
const PORT_CALL_DETAILS = 'Port Call Details';
const CONFIRM_PORT_CALL = 'Confirm and Activate';

const DPG = 'DPG';
const CARGO = 'Cargo';
const SHIP_STORES = 'Ship Stores';
const CREW = 'Crew';
const PAX = 'Pax';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  iconPath = 'assets/images/VoyageIcons/128x128/white/';
  baseMenuEntries: any[] = [
    {
      name: PREV_AND_NEXT_POC,
      icon: 'voyage.png',
      checked: true,
      hasError: false,
      hasUnsavedData: false
    },
    {
      name: PORT_CALL_DETAILS,
      icon: 'verification-clipboard.png',
      checked: true,
      hasError: false,
      hasUnsavedData: false
    }
  ];
  finalMenuEntries: any[] = [
    {
      name: CONFIRM_PORT_CALL,
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
  ) {}

  ngOnInit() {
    this.menuEntries = this.baseMenuEntries.concat(this.finalMenuEntries);
    this.portCallService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData != null) {
          const falForms = [
            {
              name: DPG,
              icon: 'hazard.png',
              checked: reportingData.reportingDpg || false,
              hasError: false,
              hasUnsavedData: false
            },
            {
              name: CARGO,
              icon: 'cargo.png',
              checked: reportingData.reportingCargo || false,
              hasError: false,
              hasUnsavedData: false
            },
            {
              name: SHIP_STORES,
              icon: 'alcohol.png',
              checked: reportingData.reportingShipStores || false,
              hasError: false,
              hasUnsavedData: false
            },
            {
              name: CREW,
              icon: 'crew.png',
              checked: reportingData.reportingCrew || false,
              hasError: false,
              hasUnsavedData: false
            },
            {
              name: PAX,
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
          p => p.name === PORT_CALL_DETAILS
        ).hasError = !metaData.valid;
      }
    );

    this.prevAndNextPortCallService.dataIsPristine$.subscribe(
      pristineData => {
        this.menuEntries.find(
          p => p.name === PREV_AND_NEXT_POC
        ).hasUnsavedData = !pristineData;
      }
    );

    this.portCallService.detailsPristine$.subscribe(
      detailsDataIsPristine => {
        this.menuEntries.find(
          p => p.name === PORT_CALL_DETAILS
        ).hasUnsavedData = !detailsDataIsPristine;
      }
    );
    this.portCallService.detailsPristine$.subscribe(detailsDataIsPristine => {
      this.menuEntries.find(
        p => p.name === PORT_CALL_DETAILS
      ).hasUnsavedData = !detailsDataIsPristine;
    });

    this.shipStoresService.dataIsPristine$.subscribe(shipStoresDataIsPristine => {
      const shipStores = this.menuEntries.find(
          p => p.name === SHIP_STORES
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
