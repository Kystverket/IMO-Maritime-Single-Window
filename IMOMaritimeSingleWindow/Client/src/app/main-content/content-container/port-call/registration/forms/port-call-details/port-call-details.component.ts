import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-port-call-details',
  templateUrl: './port-call-details.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./port-call-details.component.css']
})
export class PortCallDetailsComponent implements OnInit {

  @Input() portCallId: number;

  constructor() {}

  ngOnInit() {}
}
