import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Modal, ModalInterface, ModalOptions } from 'flowbite';
import { StateReset } from 'ngxs-reset-plugin';
import { Observable } from 'rxjs';
import { Food } from 'src/app/api/models/food.model';
import { ShopState } from 'src/app/store/shop.state';

@Component({
  selector: 'app-shopping-drawer',
  templateUrl: './shopping-drawer.component.html',
  styleUrls: ['./shopping-drawer.component.scss']
})
export class ShoppingDrawerComponent implements OnInit, AfterViewInit {
  @Select(ShopState.getFoodsCart) foodsCart$:Observable<{[key: string]: Food}>
  @Select(ShopState.getTotalPrice) totalPrice$:Observable<number>
  
  cartLength: number = 0
  private modal: ModalInterface;

  constructor(private store:Store, private elRef: ElementRef) {}

  ngOnInit(): void {
      this.foodsCart$.subscribe((foodsCart)=>{
        this.cartLength = Object.keys(foodsCart).length;
      });

      const modalOptions: ModalOptions = {
        backdrop: 'dynamic',
        closable: true
      }
      
      const $modalReference: HTMLElement = this.elRef.nativeElement.querySelector('#deleteFoodModal');
    
      this.modal = new Modal($modalReference, modalOptions);
  }

  ngAfterViewInit(): void {
  }

  cartIsEmpty(cart: {}): boolean {
    return Object.keys(cart).length === 0;
  }

  openModal(){
    if(this.cartLength){
      this.modal.show();
    }
  }

  closeModal(){
    this.modal.hide();
  }

  deleteCart(){
    this.store.dispatch(
      new StateReset(ShopState)
    );
  }

}
