import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RestaurantApiService } from '../services/restaurantApi.service';
import { Food } from '../api/models/food.model';
import { Restaurant } from '../api/models/restaurant.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit, OnDestroy{
  @Input() restaurantSlug: string;
  foodMenu: Food[];
  currentRestaurant: Restaurant;

  destroy$ = new Subject<void>();

  constructor(private readonly restaurantApiService: RestaurantApiService, private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.activatedRoute.paramMap.pipe(takeUntil(this.destroy$)).subscribe((paramMap: ParamMap) => {
      const restauantSlug = paramMap.get('slug');
      this.getRestaurantMenu(restauantSlug);
    });
  }

  getRestaurantMenu(restaurantSlug: string){
    this.restaurantApiService.getRestaurantMenu(restaurantSlug).subscribe((data) => {
      this.foodMenu = data.results.foods;
      this.currentRestaurant = data.results.restaurant;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
