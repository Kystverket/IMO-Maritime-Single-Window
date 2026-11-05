import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
