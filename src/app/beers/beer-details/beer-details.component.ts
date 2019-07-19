import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { DrinksState } from "../store";
import { Observable } from "rxjs/index";
import { getBeersSelector } from "../store/beers.selectors";
import { fetchBeersListRequest } from "../store/beers.actions";
import { Location } from "@angular/common";

@Component({
  selector: "app-beer-details",
  templateUrl: "./beer-details.component.html",
  styleUrls: ["./beer-details.component.scss"]
})
export class BeerDetailsComponent implements OnInit {
  public beers$: Observable<any>;
  id: number;
  target_og: number;
  target_fg: number;
  gravityPercent: number;
  private show: boolean = false;

  constructor(private store: Store<DrinksState>, private route: ActivatedRoute, private location: Location) {}

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

  getGravity() {
    this.beers$.subscribe(res =>
      res.map((beer, index) => {
        if (index === this.id) {
          this.target_og = beer.target_og;
          this.target_fg = beer.target_fg;
          let decrease = this.target_og - this.target_fg;
          this.gravityPercent = (decrease / this.target_og) * 100;
        }
      })
    );
  }

  toggle() {
    this.show = !this.show;
    this.getGravity();
  }

  goBack(): void {
    this.location.back();
  }
}
