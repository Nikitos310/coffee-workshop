import {isDevMode} from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createReducer,
  MetaReducer, on
} from '@ngrx/store';
import {CoffeeReducersState, CoffeeState, PageModel} from "../model/state.model";
import * as CoffeeActions from "./coffee.actions";


export const initCoffeeState: CoffeeState = {
  coffee: [],
  pages: {} as PageModel,
  loading: false,
}

export const coffeeReducer = createReducer(
  initCoffeeState,
  on(CoffeeActions.loadCoffeeData, (state) => ({...state, loading: true})),
  on(CoffeeActions.loadedCoffeeData, (state, {coffee}) => ({
    ...state,
    coffee,
    loading: false,
    pages: {
      current: 1,
      totalElements: coffee.length,
      totalPages: Math.ceil(coffee.length / 10),
      limit: 10
    }
  })),
  on(CoffeeActions.setPageNumber, (state, {pageNumber}) => ({
    ...state,
    pages: {
      ...state.pages,
      current: pageNumber
    }
  }))
);


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<CoffeeReducersState>[] = isDevMode() ? [debug] : [];
export const reducers: ActionReducerMap<CoffeeReducersState> = {
  coffeeReducer
};
