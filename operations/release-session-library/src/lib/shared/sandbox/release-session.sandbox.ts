import { Injectable } from '@angular/core';
import { AppRootSandbox } from 'src/app/shared/sandbox/app.sandbox';
import { OperationData } from '../models/OperationData';
import { Session } from '../models/Session';

@Injectable({
  providedIn: 'root',
})
export class ReleaseSessionSandbox {
  constructor(private appRootSandbox: AppRootSandbox) {

  }

  getActiveSessionsInformation(): Session {
    return this.appRootSandbox.getActiveSessionsInformation();
  }
}
