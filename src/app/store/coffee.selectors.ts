import {CoffeeState} from "../model/state.model";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Observable} from "rxjs";


export const selectState = createFeatureSelector<CoffeeState>("coffeeReducer");

export const isLoadingData = createSelector(selectState, (state) => state.loading)
export const selectCoffeeData = createSelector(
  selectState,
  (state) => state?.coffee
);

export const isStoreLoaded = createSelector(
  selectCoffeeData,
  (state) => state?.length > 0
)
export const selectCoffeeById = createSelector(
  selectState,
  (state: CoffeeState, {id}: { id: string }) => state?.coffee.find((item) => item.uid === id)
);
export const selectPaginationState = createSelector(
  selectState,
  (state) => state.pages
)
export const selectCoffeDatapartion = createSelector(
  selectCoffeeData,
  selectPaginationState,
  (cofeeData, pageData) => {
    const {current, limit} = pageData;
    const start = (current - 1) * limit;
    const end = current * limit;
    return cofeeData?.slice(start, end)
  }
);
