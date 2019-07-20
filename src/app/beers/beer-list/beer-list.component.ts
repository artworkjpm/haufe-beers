import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { DrinksState } from "../store";
import { Observable } from "rxjs/index";
import { getBeersSelector } from "../store/beers.selectors";
import { fetchBeersListRequest } from "../store/beers.actions";

@Component({
  selector: "app-beer-list",
  templateUrl: "./beer-list.component.html",
  styleUrls: ["./beer-list.component.scss"]
})
export class BeerListComponent implements OnInit {
  public beers$: Observable<any>;
  modalOpen = false;
  originalBeers = [];
  beersArray = [];

  constructor(private store: Store<DrinksState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(fetchBeersListRequest());
    this.beers$ = this.store.pipe(select(getBeersSelector));
    this.beers$.subscribe(response => {
      this.originalBeers = response;
      this.beersArray = response.slice(0, 20);
    });
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }

  onScrollDown() {
    console.log("scrolled down!");
    if (this.beersArray.length < this.originalBeers.length) {
      let len = this.beersArray.length;

      for (let i = len; i <= len + 20; i++) {
        this.beersArray.push(this.originalBeers[i]);
      }
    }
  }
}
