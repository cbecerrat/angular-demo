import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CounterService } from 'src/app/counter-service.service';
import * as UserActions from './actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private counterService: CounterService) {

  }

  incrementCounter$ = createEffect(
    () => this.actions$.pipe(
      ofType(UserActions.UserActionTypes.INCREMENT_COUNTER),
      mergeMap(() =>
        this.counterService.increment().pipe(
          map(e => {
            return new UserActions.IncrementCounterSuccess(e);
          }),
          catchError(error =>
            of(new UserActions.IncrementCounterError({ counter: 0 }))
          )
        )
      )
    )
  );

  decrementCounter$ = createEffect(
    () => this.actions$.pipe(
      ofType(UserActions.UserActionTypes.DECREMENT_COUNTER),
      mergeMap(() =>
        this.counterService.decrement().pipe(
          map(e => {
            return new UserActions.DecrementCounterSuccess(e);
          }),
          catchError(error =>
            of(new UserActions.DecrementCounterError({ counter: 0 }))
          )
        )
      )
    )
  );
}
