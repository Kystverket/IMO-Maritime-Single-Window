import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../models/contact-model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-selected-contact-mediums',
  templateUrl: './selected-contact-mediums.component.html',
  styleUrls: ['./selected-contact-mediums.component.css']
})
export class SelectedContactMediumsComponent implements OnInit {
  
  selectedContactModels: ContactModel[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.contactData$.subscribe(
      data => {
        if (data) {
          this.selectedContactModels = data;
        }
      }
    );
  }

}
