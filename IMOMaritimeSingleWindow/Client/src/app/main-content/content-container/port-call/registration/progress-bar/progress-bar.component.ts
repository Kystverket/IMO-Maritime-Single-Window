import { Component, OnDestroy, OnInit } from '@angular/core';
import { FORM_NAMES } from 'app/shared/constants/form-names';
import { ContentService, DpgService, FalCargoService, FalSecurityService, FalShipStoresService, PortCallDetailsService, PortCallFalPersonOnBoardService, PortCallService } from 'app/shared/services/';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  iconPath = 'assets/images/icons/128x128/white/';
  baseMenuEntries: any[] = [
    {
      name: FORM_NAMES.VOYAGES,
      icon: 'voyage.png',
      checked: true,
      hasError: false,
      hasUnsavedData: false
    },
    {
      name: FORM_NAMES.PORT_CALL_DETAILS,
      icon: 'verification-clipboard.png',
      checked: true,
      hasError: false,
      hasUnsavedData: false
    }
  ];
  finalMenuEntries: any[] = [
    {
      name: FORM_NAMES.CONFIRM_PORT_CALL,
      icon: 'checkmark.png',
      checked: true,
      hasError: false,
      hasUnsavedData: false
    }
  ];

  menuEntries: any[];

  cargoIsPrisitne = true;
  shipStoresIsPristine = true;
  passengerListIsPristine = true;
  crewListIsPristine = true;
  dpgListIsPristine = true;

  selectedPortCallForm: string;

  reportingForThisPortCallDataSubscription: Subscription;
  portCallFormNameSubscription: Subscription;
  crewPassengersAndDimensionsMetaSubscription: Subscription;
  voyagesDataIsPristineSubscription: Subscription;
  voyagesErrorSubscription: Subscription;
  portCallDetailsPristineSubscription: Subscription;
  shipStoresDataIsPristineSubscription: Subscription;
  dpgDataIsPristineSubscription: Subscription;
  cargoDataIsPristineSubscription: Subscription;
  passengerDataIsPristineSubscription: Subscription;
  crewDataIsPristineSubscription: Subscription;

  constructor(
    private portCallService: PortCallService,
    private portCallDetailsService: PortCallDetailsService,
    private contentService: ContentService,
    private shipStoresService: FalShipStoresService,
    private cargoService: FalCargoService,
    private personOnBoardService: PortCallFalPersonOnBoardService,
    private securityService: FalSecurityService,
    private dpgService: DpgService
  ) { }

  ngOnInit() {
    this.menuEntries = this.baseMenuEntries.concat(this.finalMenuEntries);

    this.reportingForThisPortCallDataSubscription = this.portCallDetailsService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData != null) {
          const falForms = [
            {
              name: FORM_NAMES.DPG,
              icon: 'hazard.png',
              checked: reportingData.reportingDpg || false,
              hasError: false,
              hasUnsavedData: !this.dpgListIsPristine
            },
            {
              name: FORM_NAMES.CARGO,
              icon: 'cargo.png',
              checked: reportingData.reportingCargo || false,
              hasError: false,
              hasUnsavedData: !this.cargoIsPrisitne
            },
            {
              name: FORM_NAMES.SHIP_STORES,
              icon: 'alcohol.png',
              checked: reportingData.reportingShipStores || false,
              hasError: false,
              hasUnsavedData: !this.shipStoresIsPristine
            },
            {
              name: FORM_NAMES.CREW,
              icon: 'crew.png',
              checked: reportingData.reportingCrew || false,
              hasError: false,
              hasUnsavedData: false
            },
            {
              name: FORM_NAMES.PAX,
              icon: 'pax.png',
              checked: reportingData.reportingPax || false,
              hasError: false,
              hasUnsavedData: false
            },
            {
              name: FORM_NAMES.SECURITY,
              icon: 'security.png',
              checked: reportingData.reportingSecurity || false,
              hasError: false,
              hasUnsavedData: false
            }
          ];
          this.menuEntries = this.baseMenuEntries
            .concat(falForms)
            .concat(this.finalMenuEntries);

          // Set checked in services for FAL forms
          this.shipStoresService.setCheckedInProgressBar(reportingData.reportingShipStores);
          this.personOnBoardService.setPassengerCheckedInProgressBar(reportingData.reportingPax);
          this.personOnBoardService.setCrewCheckedInProgressBar(reportingData.reportingCrew);
          this.securityService.setSecurityIsCheckedData(reportingData.reportingSecurity);
          this.dpgService.setDpgCheckedInProgressBar(reportingData.reportingDpg);
        }
      }
    );

    this.portCallFormNameSubscription = this.contentService.portCallFormName$.subscribe(
      portCallFormName => {
        this.selectedPortCallForm = portCallFormName;
      }
    );

    this.crewPassengersAndDimensionsMetaSubscription = this.portCallDetailsService.crewPassengersAndDimensionsMeta$.subscribe(
      metaData => {
        this.menuEntries.find(
          p => p.name === FORM_NAMES.PORT_CALL_DETAILS
        ).hasError = !metaData.valid;
      }
    );

    this.voyagesDataIsPristineSubscription = this.portCallService.voyagesIsPristine$.subscribe(
      pristineData => {
        this.menuEntries.find(
          p => p.name === FORM_NAMES.VOYAGES
        ).hasUnsavedData = !pristineData;
      }
    );

    this.voyagesErrorSubscription = this.portCallService.voyagesErrors$.subscribe(
      hasError => {
        this.menuEntries.find(
          p => p.name === FORM_NAMES.VOYAGES
        ).hasError = hasError;
      }
    );

    this.portCallDetailsPristineSubscription = this.portCallDetailsService.detailsPristine$.subscribe(
      detailsDataIsPristine => {
        this.menuEntries.find(
          p => p.name === FORM_NAMES.PORT_CALL_DETAILS
        ).hasUnsavedData = !detailsDataIsPristine;
      }
    );

    this.shipStoresDataIsPristineSubscription = this.shipStoresService.dataIsPristine$.subscribe(shipStoresDataIsPristine => {
      this.shipStoresIsPristine = shipStoresDataIsPristine;
      const shipStores = this.menuEntries.find(
        p => p.name === FORM_NAMES.SHIP_STORES
      );
      if (shipStores) {
        shipStores.hasUnsavedData = !shipStoresDataIsPristine;
      }
    });

    this.dpgDataIsPristineSubscription = this.dpgService.dataIsPristine$.subscribe(
      dpgDataIsPristine => {
      this.dpgListIsPristine = dpgDataIsPristine;
      const dpg = this.menuEntries.find(
        p => p.name === FORM_NAMES.DPG
      );
      if (dpg) {
        dpg.hasUnsavedData = !dpgDataIsPristine;
      }
    });

    this.cargoDataIsPristineSubscription = this.cargoService.dataIsPristine$.subscribe(
      cargoDataIsPristine => {
        this.cargoIsPrisitne = cargoDataIsPristine;
        const cargo = this.menuEntries.find(
          p => p.name === FORM_NAMES.CARGO
        );
        if (cargo) {
          cargo.hasUnsavedData = !cargoDataIsPristine;
        }
      }
    );

    this.passengerDataIsPristineSubscription = this.personOnBoardService.passengerDataIsPristine$.subscribe(
      passengerDataIsPristine => {
        this.passengerListIsPristine = passengerDataIsPristine;
        const pax = this.menuEntries.find(
          p => p.name === FORM_NAMES.PAX
        );
        if (pax) {
          pax.hasUnsavedData = !passengerDataIsPristine;
        }
      }
    );

    this.crewDataIsPristineSubscription = this.personOnBoardService.crewDataIsPristine$
    .subscribe(
      crewDataIsPristine => {
        this.crewListIsPristine = crewDataIsPristine;
        const crew = this.menuEntries.find(
          p => p.name === FORM_NAMES.CREW
        );
        if (crew) {
          crew.hasUnsavedData = !crewDataIsPristine;
        }
      }
    );
  }

  ngOnDestroy() {
    this.reportingForThisPortCallDataSubscription.unsubscribe();
    this.portCallFormNameSubscription.unsubscribe();
    this.crewPassengersAndDimensionsMetaSubscription.unsubscribe();
    this.voyagesDataIsPristineSubscription.unsubscribe();
    this.portCallDetailsPristineSubscription.unsubscribe();
    this.shipStoresDataIsPristineSubscription.unsubscribe();
    this.cargoDataIsPristineSubscription.unsubscribe();
  }

  setPortCallForm(contentName: string) {
    this.contentService.setPortCallForm(contentName);
  }
}
