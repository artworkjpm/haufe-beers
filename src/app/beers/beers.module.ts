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
import { FormsModule } from "@angular/forms";
import { ModalComponent } from "./modal-john/modal.component";
import { FilterlistPipe } from "./filterlist.pipe";
import { NgxPaginationModule } from "ngx-pagination";

// search module
//import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(BeersRouting),
    NgxPaginationModule,
    StoreModule.forFeature("drinks", beersReducers),
    EffectsModule.forFeature([BeersEffects])
  ],
  declarations: [
    BeerListComponent,
    BeerDetailsComponent,
    FilterlistPipe,
    ModalComponent
  ],
  providers: [BeersService]
})
export class BeersModule {}
