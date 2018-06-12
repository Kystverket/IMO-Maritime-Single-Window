import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ConstantsService } from '../../services/constants.service';
import { ShipContactModel } from '../../models/ship-contact-model';

@Component({
  selector: 'app-select-ship-contact',
  templateUrl: './select-ship-contact.component.html',
  styleUrls: ['./select-ship-contact.component.css']
})
export class SelectShipContactComponent implements OnInit {
  contactList: ShipContactModel[];
  selectedContactModels: ShipContactModel[];

  constructor(private constantsService: ConstantsService, private contactService: ContactService) { }

  ngOnInit() {
    this.constantsService.getContactMediumList().subscribe(
      data => {
        if (data) {
          this.contactList = data.map(cm => {
            const contact = new ShipContactModel();
            contact.contactMediumId = cm.contactMediumId;
            contact.contactMedium = cm;
            return contact;
          });
        }
      }
    );
    this.contactService.contactData$.subscribe(
      data => {
        if (data) {
          this.selectedContactModels = data;
        }
      }
    );
  }

  contactInfoChanged(contactMedium: ShipContactModel) {
    this.contactService.setContactData(this.selectedContactModels);
  }

  contactMediumSelected() {
    this.contactService.setContactData(this.selectedContactModels);
  }

  preferredSet(selectedContactModel: ShipContactModel) {
    const updatedModels = this.selectedContactModels.map(
      contactModel => {
        if (contactModel.contactMediumId === selectedContactModel.contactMediumId) {
          return selectedContactModel;
        }
        const notPreferredContactModel = contactModel;
        notPreferredContactModel.isPreferred = false;
        return notPreferredContactModel;
      }
    );
  }
}


