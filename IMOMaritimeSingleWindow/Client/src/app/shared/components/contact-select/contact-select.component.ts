import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../models/contact-model';
import { ConstantsService } from '../../services/constants.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-select',
  templateUrl: './contact-select.component.html',
  styleUrls: ['./contact-select.component.css'],
  providers: [ConstantsService]
})
export class ContactSelectComponent implements OnInit {

  contactList: ContactModel[];

  selectedContactModels: ContactModel[];

  constructor(private constantsService: ConstantsService, private contactService: ContactService) { }

  ngOnInit() {
    this.constantsService.getContactMediumList().subscribe(
      data => {
        if (data) this.contactList = data.map(d => {
          let contactModel = new ContactModel();
          contactModel.contactMedium = d;
          return contactModel;
        });
      }
    );
  }

  preferredSet(selectedContactModel: ContactModel) {
    let newUpdatedContactMediums = this.selectedContactModels.map(
      oldContactModel => {
        if (oldContactModel.contactMedium.contactMediumId === selectedContactModel.contactMedium.contactMediumId) return selectedContactModel;
        let updatedContactModel = oldContactModel;
        updatedContactModel.isPreferred = false;
        return updatedContactModel
      }
    );
  }

  contactMediumSelected() {
    this.contactService.setContactData(this.selectedContactModels);
  }

  contactInfoChanged(contactMedium: ContactModel) {
    this.contactService.setContactData(this.selectedContactModels);
  }
}
