import { Component, OnInit } from '@angular/core';
import { PurposeService } from './purpose.service';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.css'],
  providers: [PurposeService]
})
export class PurposeComponent implements OnInit {

  purposeList: any[];

  constructor(private purposeService: PurposeService) { }

  ngOnInit() {
    this.purposeService.getPurposes().subscribe(
      data => this.purposeList = data
    );
  }

}
