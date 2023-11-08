import { Action, Selector, State, StateContext } from "@ngxs/store";
import { TypesGetInterface } from "../api/models/typesGetInterface.model";
import { GetTypes } from "./shop.actions";
import { Injectable } from "@angular/core";
import { RestaurantApiService } from "../services/restaurantApi.service";
import { tap } from "rxjs";
import { Food } from "../api/models/food.model";
import { Type } from "../api/models/type.model";

export interface  ShopStateModel{
    types: Type[],
    foods: Food[]
}

@State<ShopStateModel>({
    name: "Shop",
    defaults: {
        types: [],
        foods: []
    }
})

@Injectable()
export class ShopState{

    constructor(private readonly restaurantApiService: RestaurantApiService) {}

    @Selector()
    static getTypesSelector(state:ShopStateModel){
        return state.types
    }

    @Action(GetTypes)
    getTypesStateAction(ctx:StateContext<ShopStateModel>){
        return this.restaurantApiService.getRestaurantTypes().pipe(tap((response: TypesGetInterface) => {
            const state = ctx.getState();
            ctx.setState({
                ...state,
                types: response.results
            })
        }))
    }

}