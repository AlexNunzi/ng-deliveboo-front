import { Restaurant } from "./restaurant.model"

export interface GetRestaurants {
    results: Restaurant[]
    success: boolean
  }