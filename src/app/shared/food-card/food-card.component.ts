import { Component, Input } from '@angular/core';
import { Food } from '../../api/models/food.model';
import { Store } from '@ngxs/store';
import { AddFood, RemoveFood } from 'src/app/store/shop.actions';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  @Input() currentFood: Food;

  constructor(private store: Store) {}

  addToCart(){
    this.store.dispatch(new AddFood(this.currentFood));
  }

  removeToCart(){
    this.store.dispatch(new RemoveFood(this.currentFood));
  }

}
