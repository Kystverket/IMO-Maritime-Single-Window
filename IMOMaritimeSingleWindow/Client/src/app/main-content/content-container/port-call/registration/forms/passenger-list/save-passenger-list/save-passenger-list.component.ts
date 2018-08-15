import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PortCallPassengerListService } from 'app/shared/services/port-call-fal-passenger-list.service';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { PortCallService } from 'app/shared/services/port-call.service';

@Component({
  selector: 'app-save-passenger-list',
  templateUrl: './save-passenger-list.component.html',
  styleUrls: ['./save-passenger-list.component.css']
})
export class SavePassengerListComponent implements OnInit {

  portCallPassengerList: PersonOnBoardModel[] = [];

  passengerModel: PersonOnBoardModel = new PersonOnBoardModel();

  portCallId: number;

  @Input() listIsPristine: Boolean = true;

  // @Input() passengerList: PersonOnBoardModel[];

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(
    private passengerService: PortCallPassengerListService,
    private portCallService: PortCallService
  ) { }

  ngOnInit() {
    this.portCallService.portCallIdData$.subscribe(portCallIdData => {
      if (portCallIdData) {
        this.portCallId = portCallIdData;
        console.log('Port Call ID: ' + this.portCallId);
      }
      this.passengerService.passengerList$.subscribe(list => {
        if (list) {
          this.portCallPassengerList = list;
        }
      });

    });
  }

  savePassengerList() {
    this.save.emit();
  }

}
