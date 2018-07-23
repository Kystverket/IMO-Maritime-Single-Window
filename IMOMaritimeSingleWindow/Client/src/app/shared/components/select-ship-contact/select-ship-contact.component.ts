import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ShipContactModel } from 'app/shared/models/ship-contact-model';
import { ConstantsService } from 'app/shared/services/constants.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-select-ship-contact',
  templateUrl: './select-ship-contact.component.html',
  styleUrls: ['./select-ship-contact.component.css']
})
export class SelectShipContactComponent implements OnInit, OnDestroy {

  @Input() selectedContactModelList: ShipContactModel[];

  @Output() contactModelListResult = new EventEmitter<ShipContactModel[]>();

  contactList: ShipContactModel[];

  getContactMediumListSubscription: Subscription;

  constructor(private constantsService: ConstantsService) { }

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

    if (this.selectedContactModelList === undefined) {
      this.selectedContactModelList = [];
    }
  }

  ngOnDestroy() {
    this.getContactMediumListSubscription.unsubscribe();
  }

  contactInfoChanged() {
    this.contactModelListResult.emit(this.selectedContactModelList);
  }

  onAdd($event) {
    console.log(this.selectedContactModelList);
    this.selectedContactModelList.push($event);
    this.contactModelListResult.emit(this.selectedContactModelList);
  }

  onRemove($event) {
    const index = this.selectedContactModelList.findIndex((item, i) => item.contactMediumId === $event.value.contactMediumId);
    if (index !== -1) {
      this.selectedContactModelList.splice(index, 1);
      this.contactModelListResult.emit(this.selectedContactModelList);
    } else {
      console.error('Selected contact medium could not be found.');
    }
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
  }
}


