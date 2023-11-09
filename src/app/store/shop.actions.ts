import { Food } from '../api/models/food.model';

export class AddFoodToCartAction {
  static readonly type = '[ShoppingCart] Add Food';
  constructor(public foodToAdd: Food, public restaurantSlug: string) {}
}

export class RemoveFoodFromCartAction {
  static readonly type = '[ShoppingCart] Remove Food';
  constructor(public foodToRemove: Food) {}
}

export class AddCurrentRestaurantAction {
  static readonly type = '[ShoppingCart] Add Restaurant';
  constructor(public restaurantSlug: string) {}
}
