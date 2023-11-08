import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initCarousels } from 'flowbite';
import { Type } from '../api/models/type.model';
import { Restaurant } from '../api/models/restaurant.model';
import { Select, Store } from '@ngxs/store';
import { GetFilteredRestaurantsAction, GetTypes } from '../store/shop.actions';
import { ShopState } from '../store/shop.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @Select(ShopState.getTypesSelector) getTypes$:Observable<Type[]>
  @Select(ShopState.getFilteredRestaurantsSelector) getFilteredRestaurants$:Observable<Restaurant[]>

  constructor(private store: Store) {}

  ngOnInit(){
    this.getTypeArray();
  }

  ngAfterViewInit(){
    initCarousels();
  }

  getTypeArray(){
    this.store.dispatch(new GetTypes());
  }

  getFilteredRestaurants(restaurantsId: number[]){
    this.store.dispatch(new GetFilteredRestaurantsAction(restaurantsId));
  }

}
