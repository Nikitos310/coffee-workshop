import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {CoffeeModel} from "../model/coffee.model";
import {selectCoffeDatapartion, selectPaginationState} from "../store/coffee.selectors";
import {Router} from "@angular/router";
import {TableModel} from "../model/table.model";
import {PageModel} from "../model/state.model";
import {setPageNumber} from "../store/coffee.actions";

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeListComponent implements OnInit {

  public tableModel: TableModel[] = [
    {label: "Name", fieldName: "blend_name"},
    {label: "Origin", fieldName: "origin"}
  ];
  public coffeeData$: Observable<CoffeeModel[]>;
  public paginatorState$: Observable<PageModel>;

  constructor(private store$: Store,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.coffeeData$ = this.store$.select(selectCoffeDatapartion);
    this.paginatorState$ = this.store$.select(selectPaginationState);
  }

  public showDetails(row: any): void {
    this.router.navigateByUrl(`/details/${row.uid}`);
  }

  public updatePageState(pageNumber: number): void {
    this.store$.dispatch(setPageNumber({pageNumber}));
  }
}
