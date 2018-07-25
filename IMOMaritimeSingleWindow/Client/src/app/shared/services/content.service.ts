import { Injectable } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BaseService } from './base.service';
import { LoadingScreen } from '../interfaces/loading-screen.interface';

@Injectable()
export class ContentService extends BaseService {
  private contentSource = new BehaviorSubject<string>(CONTENT_NAMES.VIEW_PORT_CALLS);
  contentName$ = this.contentSource.asObservable();

  private portCallFormSource = new BehaviorSubject<string>('Voyages');
  portCallFormName$ = this.portCallFormSource.asObservable();

  private loadingScreenSource = new BehaviorSubject<LoadingScreen>(null);
  loadingScreen$ = this.loadingScreenSource.asObservable();

  constructor() {
    super();
  }

  setContent(contentName: string) {
    this.setLoadingScreen(false, null, null);
    this.contentSource.next(contentName);
  }

  setPortCallForm(contentName: string) {
    this.portCallFormSource.next(contentName);
    console.log(contentName);
  }

  setLoadingScreen(isLoading: boolean, loadingIcon: string, loadingText: string) {
    this.loadingScreenSource.next({ isLoading, loadingIcon, loadingText });
  }
}
