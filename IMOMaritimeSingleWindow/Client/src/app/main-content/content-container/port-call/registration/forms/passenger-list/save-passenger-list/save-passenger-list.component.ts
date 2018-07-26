import { Component, OnInit } from '@angular/core';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { PortCallService } from 'app/shared/services/port-call.service';

@Component({
  selector: 'app-save-passenger-list',
  templateUrl: './save-passenger-list.component.html',
  styleUrls: ['./save-passenger-list.component.css']
})
export class SavePassengerListComponent implements OnInit {

  passengerList: PersonOnBoardModel[] = [];

  passengerModel: PersonOnBoardModel = new PersonOnBoardModel();

  portCallId: number;

  listIsPristine: Boolean = true;

  constructor(
    private passengerService: PortCallPassengerListService,
    private portCallService: PortCallService
  ) { }

  ngOnInit() {
    // Database Identification
    this.portCallService.detailsIdentificationData$.subscribe(results => {
      if (results) {
        this.portCallId = results.portCallId;
        console.log('Port Call ID: ' + this.portCallId);
      }
    });

    this.passengerService.passengerList$.subscribe(list => {
      if (list) {
        this.passengerList = list;
      }

      this.passengerService.dataIsPristine$.subscribe(isPristine => {
        this.listIsPristine = isPristine;
      });
    });
  }

  savePassengerList() {
    console.log(this.passengerList);
    this.passengerList.forEach(p => {
      p.portCallId = this.portCallId;
      p.portOfDisembarkationId = null;
      p.portOfEmbarkationId = null;
    });
    this.passengerService.updatePassengerList(this.passengerList).subscribe(res => console.log(res));
  }

}
