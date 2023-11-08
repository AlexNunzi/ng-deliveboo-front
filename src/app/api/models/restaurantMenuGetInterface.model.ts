import { Food } from "./food.model"
import { Restaurant } from "./restaurant.model"

export interface RestaurantMenuGetInterface {
    results: {
        foods: Food[]
        restaurant: Restaurant
    }
    success: boolean
  }