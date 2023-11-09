import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../api/models/food.model';
import { Select, Store } from '@ngxs/store';
import { AddFoodToCartAction, RemoveFoodFromCartAction } from 'src/app/store/shop.actions';
import { ShopState } from 'src/app/store/shop.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {
  @Input() currentFood: Food;
  @Select(ShopState.getFoodsCart) foodsCart$:Observable<any>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.foodsCart$.subscribe(foodsCart => {
      if(foodsCart[this.currentFood.slug]){
        this.currentFood.quantity = foodsCart[this.currentFood.slug].quantity;
      } else {
        this.currentFood.quantity = 0;
      }
    })
  }

  addToCart(){
    this.store.dispatch(new AddFoodToCartAction(this.currentFood));
  }

  removeFromCart(){
    if(this.currentFood.quantity > 0){
      this.store.dispatch(new RemoveFoodFromCartAction(this.currentFood));
    }
  }

}
