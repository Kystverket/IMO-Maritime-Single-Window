import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DpgService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-dpg-listing-table',
  templateUrl: './dpg-listing-table.component.html',
  styleUrls: ['./dpg-listing-table.component.css']
})
export class DpgListingTableComponent implements OnInit, OnDestroy {

  @Input() iconPath: string;
  @Input() portCallId: number;

  dpgDataSubscription: Subscription;

  public dpg: any = [];
  public headerText: string;

    // Smart table
    tableSettings = {
      mode: 'external',
      actions: false,
      attr: {
        class: 'table table-bordered'
      },
      noDataMessage: 'There are no DPGs reported.',
      columns: {
        classification: {
          title: 'Classification'
        },
        unNoName: {
          title: 'UN No/Name'
        },
        name: {
          title: 'Name'
        },
        grossWeightVolume: {
          title: 'Gross Weight/Volume',
          valuePrepareFunction: (value) => {
            let returnVal = '';
            if (value.grossWeight != null && value.grossWeight !== undefined) {
              returnVal += value.grossWeight;
            }
            if (value.name != null && value.name !== undefined) {
              returnVal += ' ' + value.name;
            }
            if (returnVal.trim().length === 0) {
              returnVal = 'N/A';
            }
            return returnVal;
          }
        },
        netWeightVolume: {
          title: 'Net Weight/Volume',
          valuePrepareFunction: (value) => {
            let returnVal = '';
            if (value.netWeight != null && value.netWeight !== undefined) {
              returnVal += value.netWeight;
            }
            if (value.name != null && value.name !== undefined) {
              returnVal += ' ' + value.name;
            }
            if (returnVal.trim().length === 0) {
              returnVal = 'N/A';
            }
            return returnVal;
          }
        },
        locationOnBoard: {
          title: 'Location on Board'
        },
        transportUnitIdentification: {
          title: 'Tranportation Unit ID'
        },
        placedInContainer: {
          title: 'Placed in Container'
        }
      }
    };

  constructor(private dpgService: DpgService) { }

  ngOnInit() {
    if (this.portCallId) {
      this.dpgDataSubscription = this.dpgService.getDpgOnBoardOverviewByPortCall(this.portCallId).subscribe(res => {
        this.dpg = res;
        this.headerText = 'DPG Info - Total DPG\'s reported: ' + res.length;
      }, error => {
        this.headerText = 'DPG Info';
      });
    }
  }

  ngOnDestroy(): void {
    this.dpgDataSubscription.unsubscribe();
  }
}
