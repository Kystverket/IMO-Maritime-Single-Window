import { Component, OnInit, Input } from '@angular/core';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-crew-info-table',
  templateUrl: './crew-info-table.component.html',
  styleUrls: ['./crew-info-table.component.css']
})
export class CrewInfoTableComponent implements OnInit {
  @Input() iconPath: string;
  crewDataSubscription: Subscription;
  numberOfCrew = 0;

  constructor(
    private personOnBoardService: PortCallFalPersonOnBoardService
  ) { }

  ngOnInit() {
    this.crewDataSubscription = this.personOnBoardService.crewList$.subscribe(
      crewList => {
        if (crewList) {
          this.numberOfCrew = crewList.length;
        }
      }
    );
  }

}
