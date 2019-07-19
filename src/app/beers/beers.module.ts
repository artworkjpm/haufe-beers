import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BeerListComponent } from "./beer-list/beer-list.component";
import { RouterModule } from "@angular/router";
import { BeersRouting } from "./beers.routing";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { beersReducers } from "./store";
import { EffectsModule } from "@ngrx/effects";
import { BeersEffects } from "./store/beers.effects";
import { BeersService } from "./beers.service";
import { BeerDetailsComponent } from "./beer-details/beer-details.component";
import { FilterPipe } from './beer-list/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(BeersRouting),
    StoreModule.forFeature("drinks", beersReducers),
    EffectsModule.forFeature([BeersEffects])
  ],
  declarations: [BeerListComponent, BeerDetailsComponent, FilterPipe],
  providers: [BeersService]
})
export class BeersModule {}
