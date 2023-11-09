import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Food } from 'src/app/api/models/food.model';
import { ShopState } from 'src/app/store/shop.state';

@Component({
  selector: 'app-shopping-drawer',
  templateUrl: './shopping-drawer.component.html',
  styleUrls: ['./shopping-drawer.component.scss']
})
export class ShoppingDrawerComponent implements OnInit {
  @Select(ShopState.getFoodsCart) foodsCart$:Observable<{[key: string]: Food}>
  cartLength: number = 0

  ngOnInit(): void {
      this.foodsCart$.subscribe((foodsCart)=>{
        console.log("cambio");
        this.cartLength = Object.keys(foodsCart).length;
      });
  }

  cartIsEmpty(cart): boolean {
    return Object.keys(cart).length == 0;
  }

}
