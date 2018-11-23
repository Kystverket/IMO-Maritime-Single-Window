import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DpgOnBoardModel } from 'app/shared/models';
import { DpgService } from 'app/shared/services/';
import { LocalDataSource } from 'ng2-smart-table/lib/data-source/local/local.data-source';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dpg-confirmation-view',
  templateUrl: './dpg-confirmation-view.component.html',
  styleUrls: ['./dpg-confirmation-view.component.css']
})
export class DpgConfirmationViewComponent implements OnInit, OnDestroy {
  @Input() iconPath: string;
  @Input() portCallId: number;

  dpgDataSubscription: Subscription;
  numberOfDpgsOnBoard = 0;
  dpgData: DpgOnBoardModel[] = [];
  dpgSource: LocalDataSource;
  isLoading = false;

  constructor(
    private dpgService: DpgService
  ) {
    this.dpgSource = new LocalDataSource(this.dpgData);
  }

  ngOnInit() {
    if (this.portCallId) {
      this.isLoading = true;
      this.dpgDataSubscription = this.dpgService.getDpgOnBoardListByPortCallId(this.portCallId)
        .finally(() => {
          this.isLoading = false;
          this.setSequenceNo();
        })
        .subscribe(
          data => {
            if (data) {
              this.dpgData = data;
              this.numberOfDpgsOnBoard = data.length;
            }
          });
    }
  }

  setSequenceNo() {
    let tmpSeq = 1;
    this.dpgData.map(dpg => {
      dpg.sequenceNo = tmpSeq;
      dpg.placedInContainerStr = dpg.placedInContainer ? 'Yes' : 'No';
      tmpSeq++;
    });
  }


  ngOnDestroy() {
  }
}
