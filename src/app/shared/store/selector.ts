import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounterState } from "./reducer";

const getCounterState = createFeatureSelector<ICounterState>('counter');

export const counterValue = createSelector(getCounterState, (state: ICounterState) => {
    return state;
});
