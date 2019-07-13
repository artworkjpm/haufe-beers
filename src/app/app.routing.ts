import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
  {path: '', redirectTo: '/beers', pathMatch: 'full'},
  {path: '**', redirectTo: '/beers', pathMatch: 'full'}
];
