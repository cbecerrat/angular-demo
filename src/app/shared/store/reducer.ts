import { ICounter } from "../interfaces/ICounter";
import { UserActions, UserActionTypes } from "./actions";

export interface ICounterState {
    data: ICounter;
}

const initialState: ICounterState = {
    data: {
        counter: 0
    }
}

export function reducer(state = initialState, action: UserActions): ICounterState {
    switch (action.type) {
        case UserActionTypes.INCREMENT_COUNTER: {
            return state;
        }
        case UserActionTypes.INCREMENT_COUNTER_SUCCESS: {
            return { data: action.payload };
        }
        case UserActionTypes.INCREMENT_COUNTER_ERROR: {
            return state;
        }
        case UserActionTypes.DECREMENT_COUNTER: {
            return state;
        }
        case UserActionTypes.DECREMENT_COUNTER_SUCCESS: {
            return { data: action.payload };
        }
        case UserActionTypes.DECREMENT_COUNTER_ERROR: {
            return state;
        }
        default: {
            return state;
        }
    }
}
