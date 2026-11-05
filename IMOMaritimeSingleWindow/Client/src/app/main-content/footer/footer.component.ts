import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
