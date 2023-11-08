import { Action, Selector, State, StateContext } from "@ngxs/store";
import { TypesGetInterface } from "../../api/models/typesGetInterface.model";
import { GetFilteredRestaurantsAction, GetTypes } from "./home.actions";
import { Injectable } from "@angular/core";
import { RestaurantApiService } from "../../services/restaurantApi.service";
import { tap } from "rxjs";
import { Food } from "../../api/models/food.model";
import { Type } from "../../api/models/type.model";
import { Restaurant } from "../../api/models/restaurant.model";
import { RestaurantsGetInterface } from "../../api/models/restaurantsGetInterface.model";

export interface  HomeStateModel{
    types: Type[],
    foods: Food[],
    filteredRestaurants: Restaurant[]
}

@State<HomeStateModel>({
    name: "HomeState",
    defaults: {
        types: [],
        foods: [],
        filteredRestaurants: []
    }
})

@Injectable()
export class HomeState{

    constructor(private readonly restaurantApiService: RestaurantApiService) {}

    @Selector()
    static getTypesSelector(state:HomeStateModel){
        return state.types;
    }

    @Action(GetTypes)
    getTypesStateAction(ctx:StateContext<HomeStateModel>){
        return this.restaurantApiService.getRestaurantTypes().pipe(tap((response: TypesGetInterface) => {
            const state = ctx.getState();
            ctx.setState({
                ...state,
                types: response.results
            });
        }));
    }

    @Selector()
    static getFilteredRestaurantsSelector(state:HomeStateModel){
        return state.filteredRestaurants;
    }

    @Action(GetFilteredRestaurantsAction, {cancelUncompleted: true})
    getFilteredRestaurantsAction(ctx:StateContext<HomeStateModel>, action:GetFilteredRestaurantsAction){
        return this.restaurantApiService.getFilteredRestaurants(action.restaurantsIds).pipe(tap((response: RestaurantsGetInterface) => {
            ctx.patchState({
                filteredRestaurants: response.results
            });
        }));
    }

}