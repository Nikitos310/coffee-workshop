import {createAction, props} from "@ngrx/store";
import {CoffeeModel} from "../model/coffee.model";

export const loadCoffeeData = createAction('[Coffee] Load data');
export const loadedCoffeeData = createAction('[Coffee] Coffee loaded', props<{ coffee: CoffeeModel[] }>());
export const setPageNumber = createAction('[Paginator] Set page number', props<{ pageNumber: number }>());
