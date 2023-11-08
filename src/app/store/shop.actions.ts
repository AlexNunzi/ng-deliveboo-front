import { Food } from "../api/models/food.model";

export class AddFood {
    static readonly type = '[ShoppingCart] Add Food';
    constructor(public food: Food) {}
  }

export class RemoveFood {
    static readonly type = '[ShoppingCart] Remove Food';
    constructor(public food: Food) {}
  }

export class GetTypes {
    static readonly type = '[ShoppingCart] Get Types';
  }

  export class GetFilteredRestaurantsAction {
    static readonly type = '[ShoppingCart] Get FilteredRestaurants';
    constructor(public restaurantsIds: number[]) {}
  }