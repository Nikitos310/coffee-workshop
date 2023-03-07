import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoffeeDetailsComponent} from './coffee-details.component';
import {CoffeeDetailsRoutingModule} from "./coffee-details-routing.module";
import {DetailsCardComponent} from "./details-card/details-card.component";


@NgModule({
  declarations: [
    CoffeeDetailsComponent,
    DetailsCardComponent
  ],
  imports: [
    CommonModule,
    CoffeeDetailsRoutingModule
  ],
})
export class CoffeeDetailsModule {
}
