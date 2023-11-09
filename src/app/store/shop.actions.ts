import { Food } from "../api/models/food.model";

export class AddFoodToCartAction {
    static readonly type = '[ShoppingCart] Add Food';
    constructor(public foodToAdd: Food) {}
  }

  export class RemoveFoodFromCartAction {
    static readonly type = '[ShoppingCart] Remove Food';
    constructor(public foodToRemove: Food) {}
  }