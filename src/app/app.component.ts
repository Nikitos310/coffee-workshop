import {Component, OnInit} from '@angular/core';
import {loadCoffeeData} from "./store/coffee.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  constructor(private store$: Store) {
  }

  public ngOnInit(): void {
    this.store$.dispatch(loadCoffeeData());
  }

}
