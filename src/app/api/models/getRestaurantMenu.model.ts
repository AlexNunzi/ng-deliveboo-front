import { Food } from "./food.model"
import { Restaurant } from "./restaurant.model"

export interface GetRestaurantMenu {
    results: {
        foods: Food[]
        restaurant: Restaurant
    }
    success: boolean
  }