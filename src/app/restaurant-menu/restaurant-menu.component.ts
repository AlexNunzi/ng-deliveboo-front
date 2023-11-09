import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Food } from '../api/models/food.model';
import { Restaurant } from '../api/models/restaurant.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { HomeState } from '../home/store/home.state';
import { GetRestaurantMenuAction } from '../home/store/home.actions';
import { Modal, ModalInterface, ModalOptions } from 'flowbite';
import { ShopState } from '../store/shop.state';
import { StateReset } from 'ngxs-reset-plugin';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit, OnDestroy, AfterViewInit{

  @Select(HomeState.getRestaurantMenuSelector) foods$:Observable<Food[]>
  @Select(HomeState.getRestaurantSelector) currentRestaurant$:Observable<Restaurant>
  @Select(ShopState.getFoodsCart) foodsCart$:Observable<{[key: string]: Food}>

  destroy$ = new Subject<void>();
  private restaurantSlug: string;
  public cartRestaurantSlug: string
  private modal: ModalInterface;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private store: Store,
    private elRef: ElementRef
    ) {}

  ngOnInit(){
    this.activatedRoute.paramMap.pipe(takeUntil(this.destroy$)).subscribe((paramMap: ParamMap) => {
      this.restaurantSlug = paramMap.get('slug');
      this.getRestaurantMenu(this.restaurantSlug);
    });
  }

  ngAfterViewInit(): void {
    const modalOptions: ModalOptions = {
      backdrop: 'dynamic',
      closable: false
    }
    
    const $modalReference: HTMLElement = this.elRef.nativeElement.querySelector('#restaurantModal');

    this.modal = new Modal($modalReference, modalOptions);

    this.cartRestaurantSlug = this.store.selectSnapshot(ShopState.getCurrentRestaurantSlug);
    if(this.cartRestaurantSlug && this.cartRestaurantSlug !== this.restaurantSlug){
      this.modal.show();
    }
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getRestaurantMenu(restaurantSlug: string){
    this.store.dispatch(new GetRestaurantMenuAction(restaurantSlug));
  }

  openModal(){
    this.modal.show();
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
