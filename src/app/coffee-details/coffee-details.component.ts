import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {Store} from "@ngrx/store";
import {selectCoffeeById} from "../store/coffee.selectors";

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeDetailsComponent implements OnInit {

  public detailsData$: Observable<any>

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store$: Store) {
  }

  public ngOnInit(): void {
    this.detailsData$ = this.route.params.pipe(
      switchMap(({id}) => {
        return this.store$.select(selectCoffeeById, {id});
      })
    )
  }

  public returnToListPage(): void {
    this.router.navigateByUrl('');
  }
}
