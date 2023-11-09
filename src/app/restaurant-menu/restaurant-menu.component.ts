import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Food } from '../api/models/food.model';
import { Restaurant } from '../api/models/restaurant.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { HomeState } from '../home/store/home.state';
import { GetRestaurantMenuAction } from '../home/store/home.actions';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit, OnDestroy{
  @Input() restaurantSlug: string;

  @Select(HomeState.getRestaurantMenuSelector) foods$:Observable<Food[]>
  @Select(HomeState.getRestaurantSelector) currentRestaurant$:Observable<Restaurant>

  destroy$ = new Subject<void>();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private store: Store
    ) {}

  ngOnInit(){
    this.activatedRoute.paramMap.pipe(takeUntil(this.destroy$)).subscribe((paramMap: ParamMap) => {
      const restauantSlug = paramMap.get('slug');
      this.getRestaurantMenu(restauantSlug);
    });
  }

  getRestaurantMenu(restaurantSlug: string){
    this.store.dispatch(new GetRestaurantMenuAction(restaurantSlug));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
