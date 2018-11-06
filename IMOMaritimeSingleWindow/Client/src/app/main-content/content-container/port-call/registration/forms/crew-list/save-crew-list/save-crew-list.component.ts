import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { PortCallFalPersonOnBoardService, PortCallService } from 'app/shared/services/';

@Component({
  selector: 'app-save-crew-list',
  templateUrl: './save-crew-list.component.html',
  styleUrls: ['./save-crew-list.component.css']
})
export class SaveCrewListComponent implements OnInit {

  crewList: PersonOnBoardModel[] = [];

  crewModel: PersonOnBoardModel = new PersonOnBoardModel();

  portCallId: number;

  @Input() listIsPristine: Boolean = true;

  // @Input() passengerList: PersonOnBoardModel[];

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(
    private personOnBoardService: PortCallFalPersonOnBoardService,
    private portCallService: PortCallService
  ) { }

  ngOnInit() {
    this.portCallService.portCallIdData$.subscribe(portCallIdData => {
      if (portCallIdData) {
        this.portCallId = portCallIdData;
      }
      this.personOnBoardService.crewList$.subscribe(list => {
        if (list) {
          this.crewList = list;
        }
      });
/*       this.personOnBoardService.crewDataIsPristine$.subscribe(isPristine => {
        this.listIsPristine = isPristine;
      }); */

    });
  }

  saveCrewList() {
    this.save.emit();
  }
}
