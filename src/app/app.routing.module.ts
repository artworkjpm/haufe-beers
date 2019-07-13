import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailsComponent } from './beers/beer-details/beer-details.component';


export const AppRoutes: Routes = [
  {path: '', redirectTo: '/beers', pathMatch: 'full'},
  {path: '**', redirectTo: '/beers', pathMatch: 'full'},
  {path: '/thisbeer', component: BeerDetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
