import { Component, Input, OnChanges, OnInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ShipContactModel } from '../../models/ship-contact-model';

@Component({
  standalone: false,
  selector: 'app-selected-contact-mediums',
  templateUrl: './selected-contact-mediums.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./selected-contact-mediums.component.css']
})
export class SelectedContactMediumsComponent implements OnInit {

  @Input() selectedContactModelList: ShipContactModel[];

  constructor() { }

  ngOnInit() { }
}
