export class GetFilteredRestaurantsAction {
    static readonly type = '[ShoppingCart] Get FilteredRestaurants';
    constructor(public restaurantsIds: number[]) {}
  }