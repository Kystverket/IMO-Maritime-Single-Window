import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ConstantsService } from 'app/shared/services/constants.service';
import { ContentService } from 'app/shared/services/content.service';
import { ShipService } from '../../../services/ship.service';

@Component({
  selector: 'app-ship-button-row',
  templateUrl: './ship-button-row.component.html',
  styleUrls: ['./ship-button-row.component.css'],
  providers: [ConstantsService]
})
export class ShipButtonRowComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();

  shipData: any[];

  constructor(
    private shipService: ShipService,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.shipService.shipOverviewData$.subscribe(
      results => {
        if (results) {
          this.shipData = results;
        }
      }
    );
  }

  onEditClick() {
    this.setContent(CONTENT_NAMES.REGISTER_SHIP);
  }

  private setContent(content: string) {
    this.setShip(content);
  }

  setShip(content) {
    this.contentService.setLoadingScreen(true, 'ship.gif', 'Loading');
    this.shipService.getShip(this.rowData.shipModel.shipId).subscribe(data => {
      if (data) {
        this.shipService.setShipOverviewData(data);
        this.contentService.setContent(content);
      }
    });
  }

}
