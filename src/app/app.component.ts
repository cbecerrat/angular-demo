import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as UserActions from './shared/store/actions';
import { ICounterState } from './shared/store/reducer';
import * as Selectors from './shared/store/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  counter$: ICounterState;

  constructor(private store: Store<ICounterState>) {

  }

  ngOnInit(): void {
    let counter$ = this.store.pipe(select(Selectors.counterValue));
    counter$.subscribe(e => this.counter$ = e);
  }

  increment(): void {
    this.store.dispatch(new UserActions.IncrementCounter(this.counter$.data));
  }

  decrement(): void {
    this.store.dispatch(new UserActions.DecrementCounter(this.counter$.data));
  }
}
