import { Action } from '@ngrx/store';
import { ICounter } from '../interfaces/ICounter';

export enum UserActionTypes {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    INCREMENT_COUNTER_SUCCESS = 'INCREMENT_COUNTER_SUCCESS',
    INCREMENT_COUNTER_ERROR = 'INCREMENT_COUNTER_ERROR',
    DECREMENT_COUNTER = 'DECREMENT_COUNTER',
    DECREMENT_COUNTER_SUCCESS = 'DECREMENT_COUNTER_SUCCESS',
    DECREMENT_COUNTER_ERROR = 'DECREMENT_COUNTER_ERROR'
}

export class IncrementCounter implements Action {
    public readonly type = UserActionTypes.INCREMENT_COUNTER;
    constructor(public payload: ICounter) { }
}

export class IncrementCounterSuccess implements Action {
    public readonly type = UserActionTypes.INCREMENT_COUNTER_SUCCESS;
    constructor(public payload: ICounter) { }
}

export class IncrementCounterError implements Action {
    public readonly type = UserActionTypes.INCREMENT_COUNTER_ERROR;
    constructor(public payload: ICounter) { }
}

export class DecrementCounter implements Action {
    public readonly type = UserActionTypes.DECREMENT_COUNTER;
    constructor(public payload: ICounter) { }
}

export class DecrementCounterSuccess implements Action {
    public readonly type = UserActionTypes.DECREMENT_COUNTER_SUCCESS;
    constructor(public payload: ICounter) { }
}
export class DecrementCounterError implements Action {
    public readonly type = UserActionTypes.DECREMENT_COUNTER_ERROR;
    constructor(public payload: ICounter) { }
}

export type UserActions =
    IncrementCounter |
    IncrementCounterSuccess |
    IncrementCounterError |
    DecrementCounter |
    DecrementCounterSuccess |
    DecrementCounterError;
