import { Injectable } from '@angular/core';
import { ILoading } from './loading.interface';

@Injectable()
export class LoadingService {

  listener: ILoading;

  constructor() { }

  subscribeToAlerts(listener: ILoading) {
    this.listener = listener;
  }

  show() {
    if (!this.listener) { return; }
    this.listener.showLoading();
  }

  hide() {
    if (!this.listener) { return; }
    this.listener.hideLoading();
  }
}
