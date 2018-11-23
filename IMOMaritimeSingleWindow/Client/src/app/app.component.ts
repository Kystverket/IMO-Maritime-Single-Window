import { Component, OnInit } from '@angular/core';
import { LoadingScreen } from './shared/interfaces/loading-screen.interface';
import { ContentService } from './shared/services/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  clientHeight: number;

  loadingIconPath = 'assets/images/animations/';
  loadingScreen: LoadingScreen;

  constructor(public contentService: ContentService) {
    this.clientHeight = window.innerHeight;
  }

  ngOnInit() {
    this.contentService.loadingScreen$.subscribe(
      loadingScreenData => {
        if (loadingScreenData) {
          this.loadingScreen = loadingScreenData;
        }
      }
    );
  }
}
