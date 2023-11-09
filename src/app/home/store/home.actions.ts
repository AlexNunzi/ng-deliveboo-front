export class GetTypesAction {
  static readonly type = '[Restaurant] Get Types';
}

export class GetFilteredRestaurantsAction {
  static readonly type = '[Restaurant] Get FilteredRestaurants';
  constructor(public restaurantsIds: number[]) {}
}

export class GetRestaurantMenuAction {
  static readonly type = '[Restaurant] Get RestaurantMenu';
  constructor(public restaurantSlug: string) {}
}
