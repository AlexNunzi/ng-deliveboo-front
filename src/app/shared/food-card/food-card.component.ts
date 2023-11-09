import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../api/models/food.model';
import { Select, Store } from '@ngxs/store';
import { AddFoodToCartAction, RemoveFoodFromCartAction } from 'src/app/store/shop.actions';
import { ShopState } from 'src/app/store/shop.state';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {
  @Input() currentFood: Food;
  @Select(ShopState.getFoodsCart) foodsCart$:Observable<{[key: string]: Food}>

  destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private readonly activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.foodsCart$.subscribe(foodsCart => {
      if(foodsCart[this.currentFood.slug]){
        this.currentFood = foodsCart[this.currentFood.slug];
      } else {
        this.currentFood.quantity = 0;
      }
    })
  }

  addToCart(){
    this.activatedRoute.paramMap.pipe(takeUntil(this.destroy$)).subscribe((paramMap: ParamMap) => {
      const restauantSlug = paramMap.get('slug');
      this.store.dispatch(new AddFoodToCartAction(this.currentFood, restauantSlug));
    });
  }

  removeFromCart(){
    if(this.currentFood.quantity > 0){
      this.store.dispatch(new RemoveFoodFromCartAction(this.currentFood));
    }
  }

}
