import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ConsignmentModel } from 'app/shared/models/consignment-model';
import { FalCargoService } from '../../../../../../shared/services/fal-cargo.service';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { PortCallModel } from '../../../../../../shared/models/port-call-model';
import { Subscription } from '../../../../../../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css'],
  providers: [FalCargoService]
})
export class CargoComponent implements OnInit, OnDestroy {
  @Input() portCallId: number;

  getConsignmentListSubscription: Subscription;

  consignmentList: ConsignmentModel[] = [];
  cargoTableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },

    columns: {
      shippingMarks: {
        title: 'Shipping Marks',
        type: 'html'
      },
      containerIdentification: {
        title: 'Container ID Number',
        type: 'html'
      },
      numberOfPackages: {
        title: 'Number of Packages',
        type: 'html'
      },
      packageType: {
        title: 'Package Type',
        type: 'html'
      },
      descriptionOfGoods: {
        title: 'Description of Goods',
        type: 'html'
      },
      hsCode: {
        title: 'HS Code',
        type: 'html'
      },
      grossVolume: {
        title: 'Gross Volume (M3)',
        type: 'html'
      },
      grossWeight: {
        title: 'Gross Weight (KGM)',
        type: 'html'
      }
    }
  };

  constructor(
    private cargoService: FalCargoService
  ) { }

  ngOnInit() {
    this.getConsignmentListSubscription = this.cargoService.getConsignmentListForPortCall(this.portCallId).subscribe(
      consignmentListResult => {
        if (consignmentListResult) {
          this.consignmentList = consignmentListResult;
          console.log(this.consignmentList);
        }
      }
    );
  }

  ngOnDestroy() {
  }

}
