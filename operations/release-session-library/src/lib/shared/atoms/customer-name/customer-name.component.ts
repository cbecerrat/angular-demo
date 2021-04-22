import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sm-customer-name',
  templateUrl: './customer-name.component.html'
})
export class CustomerNameComponent implements OnInit {
  @Input()
  customerName: string;

  ngOnInit() {

  }
}
