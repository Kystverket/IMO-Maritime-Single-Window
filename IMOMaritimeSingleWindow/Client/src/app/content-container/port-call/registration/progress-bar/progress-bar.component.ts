import { Component, OnInit } from '@angular/core';
import { MenuEntry } from '../../../../shared/models/menu-entry.interface';
import { ContentService } from '../../../../shared/services/content.service';
import { PortCallService } from '../../../../shared/services/port-call.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  icon_path = "assets/images/VoyageIcons/128x128/white/";
  base_menu_entries: any = [
    {name: "Ship, Location and Time", icon: "ship.png",       checked: true },
    {name: "Port Call Details",       icon: "verification-clipboard.png",   checked: true }
  ];
  final_menu_entries: any = [
    {name: "Confirm Port Call",       icon: "checkmark.png",  checked: true }
  ]

  menu_entries: any;

  constructor(private contentService: ContentService, private portCallService: PortCallService) { }

  setContent(contentName: string) {
    this.contentService.setPortCallForm(contentName);
  }

  ngOnInit() { 
    this.menu_entries = this.base_menu_entries.concat(this.final_menu_entries);
    this.portCallService.reportingForThisPortCallData$.subscribe((fal_forms) => {
      if (fal_forms != null) {
        this.menu_entries = this.base_menu_entries.concat(fal_forms).concat(this.final_menu_entries);
      }
    });
  }
}
