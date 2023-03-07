import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoffeeDetailsComponent} from "./coffee-details.component";

const routes: Routes = [
  {
    path: ':id',
    component: CoffeeDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoffeeDetailsRoutingModule {
}
