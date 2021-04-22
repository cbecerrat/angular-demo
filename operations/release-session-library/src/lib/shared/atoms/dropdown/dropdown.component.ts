import { Component, Input, OnInit } from '@angular/core';
import { OptionsWrapper } from '../../models/OptionsWrapper';

@Component({
  selector: 'sm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input()
  optionsWrapper: OptionsWrapper;

  ngOnInit() {

  }

  onChange() {

  }
}
