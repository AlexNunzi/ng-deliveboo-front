import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initCarousels } from 'flowbite';
import { RestaurantApiService } from '../services/restaurantApi.service';
import { Type } from '../api/models/type.model';
import { Restaurant } from '../api/models/restaurant.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  typeList: Type[];
  foundRestaurants: Restaurant[];

  constructor(private readonly restaurantApiService: RestaurantApiService) {}

  ngOnInit(){
    this.getTypeList();
    this.getFilteredRestaurants();
  }

  ngAfterViewInit(){
    initCarousels();
  }

  getTypeList(){
    this.restaurantApiService.getRestaurantTypes().subscribe((data) => {
      console.log(data);
      this.typeList = data.results;
    });
  }

  getFilteredRestaurants(){
    this.restaurantApiService.getTypedRestaurants([7, 8]).subscribe((data) => {
      console.log(data);
      this.foundRestaurants = data.results;
    });
  }

}
