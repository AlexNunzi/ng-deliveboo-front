import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Food } from "../api/models/food.model";
import { Injectable } from "@angular/core";
import { AddCurrentRestaurantAction, AddFoodToCartAction, RemoveFoodFromCartAction } from "./shop.actions";
import { StateReset } from "ngxs-reset-plugin";

export interface  ShopStateModel{
    foodsCart: {
        [key: string]: Food,
    },
    currentRestaurantSlug: string
}

@State<ShopStateModel>({
    name: "ShopState",
    defaults: {
        foodsCart: {},
        currentRestaurantSlug: undefined
    }
})

@Injectable()
export class ShopState{
    @Selector()
    static getFoodsCart(state:ShopStateModel){
        return state.foodsCart;
    }

    @Selector()
    static getCurrentRestaurantSlug(state:ShopStateModel){
        return state.currentRestaurantSlug;
    }

    @Action(AddFoodToCartAction)
    addFoodToCartAction(ctx:StateContext<ShopStateModel>, action:AddFoodToCartAction){
        let foodsCart = {...ctx.getState().foodsCart};
        const foodToAddSlug: string = action.foodToAdd.slug;
        if(foodsCart[foodToAddSlug]){
            foodsCart[foodToAddSlug].quantity++;
        } else {
            action.foodToAdd.quantity = 1;
            foodsCart[foodToAddSlug] = action.foodToAdd;
            ctx.dispatch(new AddCurrentRestaurantAction(action.restaurantSlug));
        }
        ctx.patchState({foodsCart});
    }

    @Action(RemoveFoodFromCartAction)
    removeFoodFromCartAction(ctx:StateContext<ShopStateModel>, action:RemoveFoodFromCartAction){
        let foodsCart = {...ctx.getState().foodsCart};
        const foodToRemoveSlug: string = action.foodToRemove.slug;
        if(foodsCart[foodToRemoveSlug]){
            foodsCart[foodToRemoveSlug].quantity--;
                if(foodsCart[foodToRemoveSlug].quantity <= 0){
                    delete foodsCart[foodToRemoveSlug];
                }
            if(Object.keys(foodsCart).length === 0){
                ctx.dispatch(new StateReset(ShopState));
            }
        }
        ctx.patchState({foodsCart});
    }

    @Action(AddCurrentRestaurantAction)
    addCurrentRestaurantAction(ctx:StateContext<ShopStateModel>, action:AddCurrentRestaurantAction){
        ctx.patchState({
            currentRestaurantSlug: action.restaurantSlug
        });
    }
}