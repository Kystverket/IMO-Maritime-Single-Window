import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-port-call-details',
  templateUrl: './port-call-details.component.html',
  styleUrls: ['./port-call-details.component.css']
})
export class PortCallDetailsComponent implements OnInit {

  @Input() portCallId: number;

  constructor() {}

  ngOnInit() {}
}
