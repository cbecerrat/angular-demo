import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoginService } from './login.service';
import * as UserActions from './shared/store/actions';
import { ICounterState } from './shared/store/reducer';
import * as Selectors from './shared/store/selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter$: ICounterState;

  loggedAs: string;

  constructor(private store: Store<ICounterState>,
    private loginService: LoginService) {

  }

  ngOnInit(): void {
    let counter$ = this.store.pipe(select(Selectors.counterValue));
    counter$.subscribe(e => this.counter$ = e);

    this.loggedAs = this.loginService.getLoggedAs();
  }

  increment(): void {
    this.store.dispatch(new UserActions.IncrementCounter(this.counter$.data));
  }

  decrement(): void {
    this.store.dispatch(new UserActions.DecrementCounter(this.counter$.data));
  }

  loginAsAdmin(): void {
    this.loggedAs = this.loginService.loginAsAdmin();
  }

  loginAsManager(): void {
    this.loggedAs = this.loginService.loginAsManager();
  }

  loginAsUser(): void {
    this.loggedAs = this.loginService.loginAsUser();
  }

  navigateToAdmin(): void {
    this.loginService.navigateToAdmin();
  }

  navigateToManager(): void {
    this.loginService.navigateToManager();
  }

  navigateToUser(): void {
    this.loginService.navigateToUser();
  }
}
