import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoffeeListRoutingModule} from './coffee-list-routing.module';
import {CoffeeListComponent} from "./coffee-list.component";
import {DataTableComponent} from "./data-table/data-table.component";
import {PaginatorComponent} from "./paginator/paginator.component";


@NgModule({
  declarations: [
    CoffeeListComponent,
    DataTableComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    CoffeeListRoutingModule,
  ]
})
export class CoffeeListModule {
}
