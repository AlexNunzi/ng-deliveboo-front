import { Action, Selector, State, StateContext } from "@ngxs/store";
import { TypesGetInterface } from "../../api/models/typesGetInterface.model";
import { GetFilteredRestaurantsAction, GetRestaurantMenuAction, GetTypesAction } from "./home.actions";
import { Injectable } from "@angular/core";
import { RestaurantApiService } from "../../services/restaurantApi.service";
import { tap } from "rxjs";
import { Food } from "../../api/models/food.model";
import { Type } from "../../api/models/type.model";
import { Restaurant } from "../../api/models/restaurant.model";
import { RestaurantsGetInterface } from "../../api/models/restaurantsGetInterface.model";
import { RestaurantMenuGetInterface } from "src/app/api/models/restaurantMenuGetInterface.model";

export interface  HomeStateModel{
    types: Type[],
    foods: Food[],
    filteredRestaurants: Restaurant[],
    currentRestaurant: Restaurant,
    searchCarriedOut: boolean
}

@State<HomeStateModel>({
    name: "HomeState",
    defaults: {
        types: [],
        filteredRestaurants: [],
        foods: [],
        currentRestaurant: undefined,
        searchCarriedOut: false
    }
})

@Injectable()
export class HomeState{

    constructor(private readonly restaurantApiService: RestaurantApiService) {}

    @Selector()
    static getTypesSelector(state:HomeStateModel){
        return state.types;
    }

    @Selector()
    static getFilteredRestaurantsSelector(state:HomeStateModel){
        return state.filteredRestaurants;
    }
    
    @Selector()
    static getRestaurantMenuSelector(state:HomeStateModel){
        return state.foods;
    }

    @Selector()
    static getRestaurantSelector(state:HomeStateModel){
        return state.currentRestaurant;
    }

    @Selector()
    static getSearchCarriedOut(state:HomeStateModel){
        return state.searchCarriedOut;
    }

    @Action(GetTypesAction, {cancelUncompleted: true})
    getTypesStateAction(ctx:StateContext<HomeStateModel>){
        return this.restaurantApiService.getRestaurantTypes().pipe(tap((response: TypesGetInterface) => {
            const state = ctx.getState();
            ctx.setState({
                ...state,
                types: response.results
            });
        }));
    }

    @Action(GetFilteredRestaurantsAction, {cancelUncompleted: true})
    getFilteredRestaurantsAction(ctx:StateContext<HomeStateModel>, action:GetFilteredRestaurantsAction){
        ctx.patchState({
            searchCarriedOut: false
        });
        return this.restaurantApiService.getFilteredRestaurants(action.restaurantsIds).pipe(tap((response: RestaurantsGetInterface) => {
            ctx.patchState({
                filteredRestaurants: response.results,
                searchCarriedOut: true
            });
        }));
    }


    @Action(GetRestaurantMenuAction, {cancelUncompleted: true})
    getRestaurantMenuAction(ctx:StateContext<HomeStateModel>, action:GetRestaurantMenuAction){
        return this.restaurantApiService.getRestaurantMenu(action.restaurantSlug).pipe(tap((response: RestaurantMenuGetInterface) => {
            ctx.patchState({
                foods: response.results.foods,
                currentRestaurant: response.results.restaurant
            });
        }));
    }

}