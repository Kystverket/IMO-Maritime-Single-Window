import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-ssn-bg',
  templateUrl: './ssn-bg.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./ssn-bg.component.css']
})
export class SsnBgComponent implements OnInit {
  iconPath = 'assets/images/icons/128x128/white/';

  @Input() icon: string;

  @Input() header: string;

  @Input() shownAs: string;

  @Output() closed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  close(): void {
     this.closed.emit(true);
  }

}
