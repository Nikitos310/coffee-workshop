import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./coffee-list/coffee-list.module').then(m => m.CoffeeListModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./coffee-details/coffee-details.module').then(m => m.CoffeeDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
