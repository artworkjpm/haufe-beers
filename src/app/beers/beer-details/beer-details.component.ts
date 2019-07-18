import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { DrinksState } from "../store";
import { Observable } from "rxjs/index";
import { getBeersSelector } from "../store/beers.selectors";
import { fetchBeersListRequest } from "../store/beers.actions";

@Component({
  selector: "app-beer-details",
  templateUrl: "./beer-details.component.html",
  styleUrls: ["./beer-details.component.scss"]
})
export class BeerDetailsComponent implements OnInit {
  public beers$: Observable<any>;
  id: number;

  constructor(private store: Store<DrinksState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(fetchBeersListRequest());
    this.beers$ = this.store.pipe(select(getBeersSelector));
    this.getId();
  }

  getId(): void {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.id = this.id - 1;
    console.log("id: " + this.id);
  }
}
