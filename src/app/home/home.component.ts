import { AfterViewInit, Component } from '@angular/core';
import { initCarousels } from 'flowbite';
import { RestaurantApiService } from '../services/restaurantApi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(private readonly restaurantApiService: RestaurantApiService) {}

  ngAfterViewInit(){
    initCarousels();
  }

  getTypeList(){
    this.restaurantApiService.getRestaurantTypes().subscribe((data) => console.log(data));
  }

  getFilteredRestaurants(){
    this.restaurantApiService.getTypedRestaurants([7, 8]).subscribe((data) => console.log(data));
  }

  getRestaurantMenu(){
    this.restaurantApiService.getRestaurantMenu("indian-restaurant").subscribe((data) => console.log(data));
  }

}
