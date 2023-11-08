import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from '../api/models/type.model';
import { Restaurant } from '../api/models/restaurant.model';
import { Food } from '../api/models/food.model';
import { GetTypes } from '../api/models/getTypes.model';
import { GetRestaurants } from '../api/models/getRestaurants.model';
import { GetRestaurantMenu } from '../api/models/getRestaurantMenu.model';

@Injectable()
export class RestaurantApiService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

    // Returns the array of restaurant's types
    public getRestaurantTypes(): Observable<GetTypes> {
        const url: string = `${this.apiUrl}/types`;
        return this.http.get<GetTypes>(url);
    }

    // Returns the array of restaurants having all types given as argument associated 
    public getTypedRestaurants(typeIds: number[]): Observable<GetRestaurants> {
        let typeIdsString = "";
        typeIds.forEach((id, index) => typeIdsString += (index == 0 ? `type_id[]=${id}` : `&type_id[]=${id}`));

        const url: string = `${this.apiUrl}/restaurant/type?${typeIdsString}`;
        return this.http.get<GetRestaurants>(url);
    }

    // Returns the array of restaurant's food based on the restaurant's slug given as argument
    public getRestaurantMenu(restaurantSlug: string): Observable<GetRestaurantMenu> {
        const url: string = `${this.apiUrl}/foods/${restaurantSlug}`;

        return this.http.get<GetRestaurantMenu>(url);
    }

}
