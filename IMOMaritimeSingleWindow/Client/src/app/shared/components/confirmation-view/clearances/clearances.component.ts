import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortCallService } from 'app/shared/services/port-call.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-clearances',
  templateUrl: './clearances.component.html',
  styleUrls: ['./clearances.component.css']
})
export class ClearancesComponent implements OnInit, OnDestroy {
  clearanceList: any[] = [];

  clearanceListDataSubscription: Subscription;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.clearanceListDataSubscription = this.portCallService.clearanceListData$.subscribe(clearanceListData => {
      if (clearanceListData) {
        this.clearanceList = clearanceListData;
      }
    });
  }

  ngOnDestroy() {
    this.clearanceListDataSubscription.unsubscribe();
  }
}
