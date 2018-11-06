import { Injectable } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { PortCallDetailsModel } from 'app/shared/models/port-call-details-model';
import { ContentService, FalCargoService, FalShipStoresService, PortCallDetailsService, PortCallOverviewService, PortCallService } from 'app/shared/services/';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadPortCallService {

  content: string;
  portCallId: number;

  private isLoadingSource = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSource.asObservable();

  constructor(
    private overviewService: PortCallOverviewService,
    private portCallService: PortCallService,
    private contentService: ContentService,
    private cargoService: FalCargoService,
    private shipStoresService: FalShipStoresService,
    private portCallDetailsService: PortCallDetailsService
  ) { }

  setContent(portCallId: number, content: string = CONTENT_NAMES.REGISTER_PORT_CALL) {
    this.content = content;
    this.portCallId = portCallId;
    this.isLoadingSource.next(true);
    this.setPortCall();
  }

  private setPortCall() {
    this.overviewService.getOverview(this.portCallId).subscribe(
      data => {
        if (data) {
          // 2018.08.17 Trying new pattern:
          this.portCallService.setPortCallData(data.portCall);
          //
          this.portCallService.setPortCall(data);
          this.portCallService.setVoyagesIsPristine(true);
          this.cargoService.setDataIsPristine(true);
          this.shipStoresService.setShipStoresList(data.portCall.falShipStores);
          this.shipStoresService.setDataIsPristine(true);
          this.setPurpose();
        }
      }
    );
  }
  private setPurpose() {
    this.portCallDetailsService.getPurposeByPortCallId(this.portCallId).subscribe(
      purposeData => {
        if (purposeData) {
          if (purposeData.find(p => p.name === 'Other')) {
            this.portCallDetailsService.getOtherName(this.portCallId).subscribe(
              otherNameData => {
                this.portCallDetailsService.setOtherPurposeName(otherNameData);
                this.portCallDetailsService.setPortCallPurposeData(purposeData);
                this.setDetails();
              }
            );
          } else {
            this.portCallDetailsService.setPortCallPurposeData(purposeData);
            this.setDetails();
          }
        } else {
          console.log('No purpose information has been registered for this port call.');
        }
      },
      error => {
        console.log('Get Purpose Error: ', error);
      }
    );
  }
  private setDetails() {
    this.portCallDetailsService.getDetailsByPortCallId(this.portCallId).subscribe(
      detailsData => {
        if (detailsData) {
          this.portCallDetailsService.setDetails(detailsData);
        } else {
          console.log('No details information has been registered for this port call.');
          const portCallDetails = new PortCallDetailsModel();
          portCallDetails.portCallId = this.portCallId;
          this.portCallDetailsService.setDetails(portCallDetails);
        }
        this.finishLoading();
      },
      error => {
        console.log('Get Details Error: ', error);
      }
    );
  }
  private finishLoading() {
    this.portCallService.setPortCallIdData(this.portCallId);
    this.isLoadingSource.next(false);
    this.contentService.setContent(this.content);
  }
}
