import { Restaurant } from './restaurant.model';

export interface RestaurantsGetInterface {
  results: Restaurant[];
  success: boolean;
}
