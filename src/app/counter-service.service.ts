import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICounter } from './shared/interfaces/ICounter';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;
  constructor() { }

  public increment(): Observable<ICounter> {
    this.counter++;
    return of({ counter: this.counter });
  }

  public decrement(): Observable<ICounter> {
    this.counter--;
    return of({ counter: this.counter });
  }
}
