import { Component, Input } from '@angular/core';
import { Food } from '../../api/models/food.model';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  @Input() currentFood: Food;
}
