import { Component, Input, OnInit } from '@angular/core';
import { ActiveSession } from '../../models/ActiveSession';

@Component({
  selector: 'sm-release-session-template',
  templateUrl: './release-session.template.component.html',
  styleUrls: ['./release-session.template.component.css']
})
export class ReleaseSessionTemplateComponent implements OnInit {
  @Input()
  customerName: string;

  @Input()
  customerId: string;

  @Input()
  digitalAssets: Array<string>;

  @Input()
  operationTypes: Array<string>

  @Input()
  activeSessions: Array<ActiveSession>

  ngOnInit() {

  }

  onCloseSession() {
    console.log('Closing');
  }
}
