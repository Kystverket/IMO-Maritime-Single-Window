import { Component, OnInit } from '@angular/core';
import { PortCallService } from 'app/shared/services/port-call.service';

@Component({
  selector: 'app-clearances',
  templateUrl: './clearances.component.html',
  styleUrls: ['./clearances.component.css']
})
export class ClearancesComponent implements OnInit {
  clearanceList: any[] = [];

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.clearanceListData$.subscribe(clearanceListData => {
      if (clearanceListData) {
        this.clearanceList = clearanceListData;
      }
    });
  }
}
