import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../../services/constants.service';
import { ContactMediumModel } from '../../models/contact-medium-model';
import { ContactModel } from '../../models/contact-model';

@Component({
  selector: 'app-contact-select',
  templateUrl: './contact-select.component.html',
  styleUrls: ['./contact-select.component.css'],
  providers: [ConstantsService]
})
export class ContactSelectComponent implements OnInit {

  contactList: ContactModel[];

  selectedContactModels: ContactModel[];

  constructor(private constantsService: ConstantsService) { }

  ngOnInit() {
    this.constantsService.getContactMediumList().subscribe(
      data => {
        console.log(data);

        if (data) this.contactList = data.map(d => {
          let contactModel = new ContactModel();
          contactModel.contactMedium = d;
          console.log(contactModel);

          return contactModel;
        });
      }
    );
  }

  contactMediumSelected() {
    console.log(this.selectedContactModels);

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

  contactInfoChanged(contactMedium: ContactModel, $event: any) {
    console.log(contactMedium);
    console.log($event);
  }
}
