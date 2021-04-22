import { Component, OnInit } from '@angular/core';
import { Session } from '../shared/models/Session';
import { ReleaseSessionSandbox } from '../shared/sandbox/release-session.sandbox';

@Component({
  selector: 'sm-customer-query-operation-library-component',
  templateUrl: './customer-query-operation-library.component.html',
  styleUrls: ['./customer-query-operation-library.component.css']
})
export class CustomerQueryOperationLibraryComponent implements OnInit {
  activeSession: Session;

  constructor(private releaseSessionSandbox: ReleaseSessionSandbox) {

  }

  ngOnInit() {
    this.activeSession = this.releaseSessionSandbox.getActiveSessionsInformation();
  }
}
