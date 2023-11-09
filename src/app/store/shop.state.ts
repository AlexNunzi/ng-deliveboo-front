import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Food } from "../api/models/food.model";
import { Injectable } from "@angular/core";
import { AddFoodToCartAction, RemoveFoodFromCartAction } from "./shop.actions";

export interface  ShopStateModel{
    foodsCart: {
        [key: string]: Food,
    }
}

@State<ShopStateModel>({
    name: "ShopState",
    defaults: {
        foodsCart: {}
    }
})

@Injectable()
export class ShopState{
    @Selector()
    static getFoodsCart(state:ShopStateModel){
        return state.foodsCart;
    }

    @Action(AddFoodToCartAction)
    addFoodToCartAction(ctx:StateContext<ShopStateModel>, action:AddFoodToCartAction){
        let store = ctx.getState();
        action.foodToAdd.quantity++;
        if(store.foodsCart[action.foodToAdd.slug]){
            store.foodsCart[action.foodToAdd.slug].quantity++;
        } else {
            store.foodsCart[action.foodToAdd.slug] = {...action.foodToAdd};
        }
        ctx.setState(store);
        console.log(store.foodsCart);
    }

    @Action(RemoveFoodFromCartAction)
    removeFoodFromCartAction(ctx:StateContext<ShopStateModel>, action:RemoveFoodFromCartAction){
        let store = ctx.getState();
        action.foodToRemove.quantity--;
        if(store.foodsCart[action.foodToRemove.slug]){
            if(action.foodToRemove.quantity <= 0){
                delete store.foodsCart[action.foodToRemove.slug];
            } else {
                store.foodsCart[action.foodToRemove.slug].quantity = action.foodToRemove.quantity;
            }
        }
        ctx.setState(store);
        console.log(store.foodsCart);
    }
}