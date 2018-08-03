import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ConsignmentModel } from 'app/shared/models/consignment-model';
import { FalCargoService } from '../../../../../../shared/services/fal-cargo.service';
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
  selectedConsignment: ConsignmentModel = null;
  consignmentIsSelected = false;

  constructor(
    private cargoService: FalCargoService
  ) { }

  selectConsignment($event) {
    console.log($event);
    this.selectedConsignment = $event;
    this.consignmentIsSelected = true;
  }

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
