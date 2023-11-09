import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypesGetInterface } from '../api/models/typesGetInterface.model';
import { RestaurantsGetInterface } from '../api/models/restaurantsGetInterface.model';
import { RestaurantMenuGetInterface } from '../api/models/restaurantMenuGetInterface.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class RestaurantApiService {
  private apiUrl = environment.BACKEND_URL + '/api';

  constructor(private http: HttpClient) {}

  // Returns the array of restaurant's types
  public getRestaurantTypes(): Observable<TypesGetInterface> {
    const url: string = `${this.apiUrl}/types`;
    return this.http.get<TypesGetInterface>(url);
  }

  // Returns the array of restaurants having all types given as argument associated
  public getFilteredRestaurants(
    typeIds: number[]
  ): Observable<RestaurantsGetInterface> {
    let typeIdsString = '';
    typeIds.forEach(
      (id, index) =>
        (typeIdsString += index === 0 ? `type_id[]=${id}` : `&type_id[]=${id}`)
    );

    const url: string = `${this.apiUrl}/restaurant/type?${typeIdsString}`;
    return this.http.get<RestaurantsGetInterface>(url);
  }

  // Returns the array of restaurant's food based on the restaurant's slug given as argument
  public getRestaurantMenu(
    restaurantSlug: string
  ): Observable<RestaurantMenuGetInterface> {
    const url: string = `${this.apiUrl}/foods/${restaurantSlug}`;

    return this.http.get<RestaurantMenuGetInterface>(url);
  }
}
