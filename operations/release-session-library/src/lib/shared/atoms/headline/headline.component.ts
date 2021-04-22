import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sm-headline',
  templateUrl: './headline.component.html'
})
export class HeadlineComponent implements OnInit {
  @Input()
  headerText: string;

  ngOnInit() {

  }
}
