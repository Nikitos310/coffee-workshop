import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import * as CoffeeActions from "./coffee.actions";
import {CoffeeHttpsService} from "../services/coffee-https.service";
import {mergeMap, switchMap} from "rxjs";

@Injectable()
export class CoffeeEffects {

  loadCoffeeData$ = createEffect(() => this.actions$.pipe(
    ofType(CoffeeActions.loadCoffeeData),
    mergeMap(() => this.coffeeService.getCoffeeData('50').pipe(
      switchMap((coffee) => [CoffeeActions.loadedCoffeeData({coffee})])
    )),
  ));

  constructor(
    private actions$: Actions,
    private store$: Store,
    private coffeeService: CoffeeHttpsService
  ) {
  }
}
