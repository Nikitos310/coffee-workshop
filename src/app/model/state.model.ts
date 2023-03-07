import {CoffeeModel} from "./coffee.model";

export interface CoffeeState {
  coffee: CoffeeModel[];
  pages: PageModel
  loading?: boolean;
}

export interface CoffeeReducersState {
  coffeeReducer: CoffeeState
}

export interface PageModel {
  current: number;
  totalPages: number;
  totalElements: number
  limit: number;
}
