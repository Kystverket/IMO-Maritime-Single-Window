import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../services/port-call.service';

@Component({
  selector: 'app-clearances',
  templateUrl: './clearances.component.html',
  styleUrls: ['./clearances.component.css']
})
export class ClearancesComponent implements OnInit {

  clearanceList: any[] = [];

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.overviewData$.subscribe(
      data => {
        console.log(data);
        if (data) this.clearanceList = data.clearanceList;
      }
    )
  }

}
