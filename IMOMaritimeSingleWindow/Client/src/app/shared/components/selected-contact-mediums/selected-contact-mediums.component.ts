import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ShipContactModel } from '../../models/ship-contact-model';

@Component({
  selector: 'app-selected-contact-mediums',
  templateUrl: './selected-contact-mediums.component.html',
  styleUrls: ['./selected-contact-mediums.component.css']
})
export class SelectedContactMediumsComponent implements OnInit {

  @Input() selectedContactModelList: ShipContactModel[];

  constructor() { }

  ngOnInit() { }
}
