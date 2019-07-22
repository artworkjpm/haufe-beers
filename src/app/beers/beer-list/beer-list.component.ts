import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { DrinksState } from "../store";
import { Observable } from "rxjs/index";
import { getBeersSelector } from "../store/beers.selectors";
import { fetchBeersListRequest } from "../store/beers.actions";
import { map } from 'rxjs/operators';


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
  beername: string;
  p:number;
  currentPage$: Observable<number>;

  constructor(private store: Store<DrinksState>, private router: Router, protected route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(fetchBeersListRequest());
    this.beers$ = this.store.pipe(select(getBeersSelector));
    this.beers$.subscribe(response => {
      this.beersArray = response;
    });

    const fetchPage = ([currentPage, itemsPerPage, _]: [number, number, undefined]) => {
      const take = itemsPerPage;
      const skip = (currentPage - 1) * itemsPerPage;

  };

  this.currentPage$ = this.route.queryParamMap.pipe(
    map(qpm => qpm.get('page')),
    map(page => (!page ? 1 : +page)),
);



    
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
  
}
