import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';
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
    private portCallService: PortCallService,
    private personOnBoardService: PortCallFalPersonOnBoardService
  ) { }

  ngOnInit() {
    this.portCallService.portCallIdData$.subscribe(portCallIdData => {
      if (portCallIdData) {
        this.portCallId = portCallIdData;
      }
      this.personOnBoardService.passengerList$.subscribe(list => {
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
