import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-select',
  templateUrl: './contact-select.component.html',
  styleUrls: ['./contact-select.component.css']
})
export class ContactSelectComponent implements OnInit {

  contactDataList: any = [
    { name: 'E-mail', value: '' },
    { name: 'Inmarsat', value: '' }
  ];
  selectedContactMediums = [];

  constructor() { }

  ngOnInit() {
  }

  contactMediumSelected() {
    console.log(this.selectedContactMediums);
    
  }

  contactInfoChanged(contactMedium: any, $event: any) {
    console.log(contactMedium);
    console.log($event);    
  }
}
