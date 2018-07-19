import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShipContactModel } from '../../models/ship-contact-model';
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-selected-contact-mediums',
  templateUrl: './selected-contact-mediums.component.html',
  styleUrls: ['./selected-contact-mediums.component.css']
})
export class SelectedContactMediumsComponent implements OnInit, OnDestroy {

  selectedContactModels: ShipContactModel[];

  contactDataSubscription: Subscription;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactDataSubscription = this.contactService.contactData$.subscribe(data => {
      if (data) {
        this.selectedContactModels = data;
      }
    });
  }

  ngOnDestroy() {
    this.contactDataSubscription.unsubscribe();
  }
}
