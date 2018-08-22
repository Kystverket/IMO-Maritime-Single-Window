import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-crew-info-table',
  templateUrl: './crew-info-table.component.html',
  styleUrls: ['./crew-info-table.component.css']
})
export class CrewInfoTableComponent implements OnInit, OnDestroy {
  @Input() iconPath: string;
  @Input() portCallId: number;

  crewDataSubscription: Subscription;
  numberOfCrew = 0;

  constructor(
    private personOnBoardService: PortCallFalPersonOnBoardService
  ) { }

  ngOnInit() {
    if (this.portCallId) {
      this.crewDataSubscription = this.personOnBoardService.getCrewListByPortCallId(this.portCallId).subscribe(
        crewList => {
          if (crewList) {
            this.numberOfCrew = crewList.length;
          }
        }
      );
    }
  }

  ngOnDestroy() {
    this.crewDataSubscription.unsubscribe();
  }

}
