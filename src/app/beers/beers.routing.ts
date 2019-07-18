import { RouterModule, Routes } from "@angular/router";
import { BeerListComponent } from "./beer-list/beer-list.component";
import { BeerDetailsComponent } from "./beer-details/beer-details.component";

export const BeersRouting: Routes = [
  {
    path: "beers",
    component: BeerListComponent
  },
  {
    path: "beer-details/:id",
    component: BeerDetailsComponent
  }
];
