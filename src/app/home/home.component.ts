import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initCarousels } from 'flowbite';
import { RestaurantApiService } from '../services/restaurantApi.service';
import { Type } from '../api/models/type.model';
import { Restaurant } from '../api/models/restaurant.model';
import { Select, Store } from '@ngxs/store';
import { GetTypes } from '../store/shop.actions';
import { ShopState } from '../store/shop.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  typeList: Type[];
  foundRestaurants: Restaurant[];

  constructor(private readonly restaurantApiService: RestaurantApiService, private store: Store) {}

  ngOnInit(){
    this.getTypeArray();
    this.getFilteredRestaurants();
  }

  ngAfterViewInit(){
    initCarousels();
  }

  @Select(ShopState.getTypesSelector) getTypes$:Observable<Type[]>
  getTypeArray(){
    this.store.dispatch(new GetTypes());

    this.getTypes$.subscribe((response:Type[]) => {
      console.log(response);
      this.typeList = response;
    });
  }

  getFilteredRestaurants(){
    this.restaurantApiService.getTypedRestaurants([7, 8]).subscribe((data) => {
      console.log(data);
      this.foundRestaurants = data.results;
    });
  }

}
