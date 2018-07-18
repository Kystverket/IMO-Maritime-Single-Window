import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ContentService } from 'app/shared/services/content.service';
import { ShipService } from 'app/shared/services/ship.service';

@Component({
  selector: 'app-ship-button-row',
  templateUrl: './ship-button-row.component.html',
  styleUrls: ['./ship-button-row.component.css']
})
export class ShipButtonRowComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor(
    private shipService: ShipService,
    private contentService: ContentService
  ) { }

  ngOnInit() { }

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
