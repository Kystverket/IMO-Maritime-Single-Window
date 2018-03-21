import { Component, OnInit } from '@angular/core';
import { MenuEntry } from '../../../../shared/models/menu-entry.interface';
import { ContentService } from '../../../../shared/services/content.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  icon_path = "assets/images/VoyageIcons/128x128/white/";
  menu_entries: MenuEntry[] = [
    {title: "Ship, location & time",  iconPath: this.icon_path + "ship.png",       componentDescription: "Ship Location and Time" },
    {title: "Port Call Details",      iconPath: this.icon_path + "portcall.png",   componentDescription: "Port Call Details" }
  ];

  constructor(private contentService: ContentService) { }

  setContent(contentName: string) {
    this.contentService.setPortCallForm(contentName);
  }

  ngOnInit() {
  }

}
