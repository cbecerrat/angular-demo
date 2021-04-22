import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sm-customer-query',
  templateUrl: './customer-query.component.html',
  styleUrls: ['./customer-query.component.css']
})
export class CustomerQueryComponent implements OnInit {
  @Input()
  headerText: string;

  @Input()
  customerName: string;

  ngOnInit() {

  }

  onCloseConsult() {
    console.log('Closing');
  }
}
