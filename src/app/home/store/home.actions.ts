import { Food } from "../../api/models/food.model";

export class GetTypes {
    static readonly type = '[ShoppingCart] Get Types';
  }

export class GetFilteredRestaurantsAction {
  static readonly type = '[ShoppingCart] Get FilteredRestaurants';
  constructor(public restaurantsIds: number[]) {}
}