import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sm-customer-session',
  templateUrl: './customer-session.component.html',
  styleUrls: ['./customer-session.component.css']
})
export class CustomerSessionComponent implements OnInit {
  @Input()
  digitalAsset: string;

  @Input()
  state: string;

  ngOnInit() {

  }

  onCloseSession() {
    console.log('Closing');
  }
}
