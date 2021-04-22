import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sm-customer-operation-data',
  templateUrl: './customer-operation-data.component.html',
  styleUrls: ['./customer-operation-data.component.css']
})
export class CustomerOperationDataComponent implements OnInit {
  @Input()
  digitalAssets: Array<string>;

  @Input()
  operationTypes: Array<string>;

  ngOnInit() {

  }
}
