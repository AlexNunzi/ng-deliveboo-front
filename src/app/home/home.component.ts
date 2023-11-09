import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { initCarousels } from 'flowbite';
import { Type } from '../api/models/type.model';
import { Restaurant } from '../api/models/restaurant.model';
import { Select, Store } from '@ngxs/store';
import {
  GetFilteredRestaurantsAction,
  GetTypesAction,
} from './store/home.actions';
import { HomeState } from './store/home.state';
import { Observable } from 'rxjs';
import { StateReset } from 'ngxs-reset-plugin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @Select(HomeState.getTypesSelector) getTypes$: Observable<Type[]>;
  @Select(HomeState.getFilteredRestaurantsSelector)
  getFilteredRestaurants$: Observable<Restaurant[]>;
  @Select(HomeState.getSearchCarriedOut)
  getSearchCarriedOut$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new StateReset(HomeState));
    this.getTypeArray();
  }

  ngAfterViewInit() {
    initCarousels();
  }

  getTypeArray() {
    this.store.dispatch(new GetTypesAction());
  }

  getFilteredRestaurants(restaurantsId: number[]) {
    this.store.dispatch(new GetFilteredRestaurantsAction(restaurantsId));
  }
}
