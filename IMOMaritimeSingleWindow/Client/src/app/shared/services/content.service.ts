import { Injectable } from '@angular/core';
import { FORM_NAMES } from 'app/shared/constants/form-names';
import { BehaviorSubject } from 'rxjs';
import { CONTENT_NAMES } from '../constants/content-names';
import { LoadingScreen } from '../interfaces/loading-screen.interface';
import { BaseService } from './base.service';

@Injectable()
export class ContentService extends BaseService {
  private contentSource = new BehaviorSubject<string>(CONTENT_NAMES.VIEW_PORT_CALLS);
  contentName$ = this.contentSource.asObservable();

  private portCallFormSource = new BehaviorSubject<string>(FORM_NAMES.VOYAGES);
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
  }

  setLoadingScreen(isLoading: boolean, loadingIcon: string, loadingText: string) {
    this.loadingScreenSource.next({ isLoading, loadingIcon, loadingText });
  }
}
