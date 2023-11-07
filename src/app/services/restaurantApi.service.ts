import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RestaurantApiService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

    // Returns the list of restaurant's types
    public getRestaurantTypes(): Observable<any> {
        const url: string = `${this.apiUrl}/types`;
        return this.http.get(url);
    }

    // Returns the list of restaurants having all types given as argument associated 
    public getTypedRestaurants(typeIds: number[]): Observable<any> {
        let typeIdsString = "";
        typeIds.forEach((id, index) => typeIdsString += (index == 0 ? `type_id[]=${id}` : `&type_id[]=${id}`));

        const url: string = `${this.apiUrl}/restaurant/type?${typeIdsString}`;
        return this.http.get(url);
    }

    // Returns menu of the restaruant based on the restaurant's slug given as argument
    public getRestaurantMenu(restaurantSlug: string): Observable<any> {
        const url: string = `${this.apiUrl}/foods/${restaurantSlug}`;

        return this.http.get(url);
    }

}
