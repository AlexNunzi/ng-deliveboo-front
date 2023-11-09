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
        const foodToAddSlug: string = action.foodToAdd.slug;
        if(store.foodsCart[foodToAddSlug]){
            store.foodsCart[foodToAddSlug].quantity++;
        } else {
            action.foodToAdd.quantity = 1;
            store.foodsCart[foodToAddSlug] = action.foodToAdd;
        }
        // action.foodToAdd.quantity = store.foodsCart[foodToAddSlug].quantity;
        ctx.setState(store);
    }

    @Action(RemoveFoodFromCartAction)
    removeFoodFromCartAction(ctx:StateContext<ShopStateModel>, action:RemoveFoodFromCartAction){
        let store = ctx.getState();
        const foodToRemoveSlug: string = action.foodToRemove.slug;
        if(store.foodsCart[foodToRemoveSlug]){
            store.foodsCart[foodToRemoveSlug].quantity--;
                if(store.foodsCart[foodToRemoveSlug].quantity <= 0){
                    delete store.foodsCart[foodToRemoveSlug];
                }
        }
        ctx.setState(store);
    }
}