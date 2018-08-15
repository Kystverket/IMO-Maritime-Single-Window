import { Component, OnInit } from '@angular/core';
import { FalSecurityModel } from '../../../../../../shared/models/fal-security-model';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  securityModel: FalSecurityModel = new FalSecurityModel();

  constructor() { }

  ngOnInit() {
  }

}
