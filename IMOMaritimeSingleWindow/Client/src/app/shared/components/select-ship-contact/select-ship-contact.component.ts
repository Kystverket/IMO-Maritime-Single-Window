import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from 'app/shared/services/contact.service';
import { ConstantsService } from 'app/shared/services/constants.service';
import { ShipContactModel } from 'app/shared/models/ship-contact-model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-select-ship-contact',
  templateUrl: './select-ship-contact.component.html',
  styleUrls: ['./select-ship-contact.component.css']
})
export class SelectShipContactComponent implements OnInit, OnDestroy {

  @Input() selectedContactModelList: ShipContactModel[] = [];

  @Output() contactModelListResult = new EventEmitter<ShipContactModel[]>();

  contactList: ShipContactModel[];

  getContactMediumListSubscription: Subscription;

  constructor(private constantsService: ConstantsService, private contactService: ContactService) { }

  ngOnInit() {
    this.getContactMediumListSubscription = this.constantsService.getContactMediumList().subscribe(
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
  }

  ngOnDestroy() {
    this.getContactMediumListSubscription.unsubscribe();
  }

  contactInfoChanged() {
    this.contactModelListResult.emit(this.selectedContactModelList);
    this.contactService.setContactData(this.selectedContactModelList);
  }

  contactMediumSelected() {
    this.contactModelListResult.emit(this.selectedContactModelList);
    this.contactService.setContactData(this.selectedContactModelList);
  }

  preferredSet(selectedContactModel: ShipContactModel) {
    const updatedContactModelList = this.selectedContactModelList.map(
      contactModel => {
        if (contactModel.contactMediumId === selectedContactModel.contactMediumId) {
          return selectedContactModel;
        }
        const notPreferredContactModel = contactModel;
        notPreferredContactModel.isPreferred = false;
        return notPreferredContactModel;
      }
    );
    this.contactModelListResult.emit(updatedContactModelList);
    this.contactService.setContactData(updatedContactModelList);
  }
}


