import { Component, OnInit } from '@angular/core';
import { ShipContactModel } from '../../models/ship-contact-model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-selected-contact-mediums',
  templateUrl: './selected-contact-mediums.component.html',
  styleUrls: ['./selected-contact-mediums.component.css']
})
export class SelectedContactMediumsComponent implements OnInit {

  selectedContactModels: ShipContactModel[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.contactData$.subscribe(data => {
      if (data) {
        this.selectedContactModels = data;
      }
    });
  }
}
