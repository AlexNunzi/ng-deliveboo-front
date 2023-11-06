import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingDrawerComponent } from './header/shopping-drawer/shopping-drawer.component';
import { CarouselJumboComponent } from './carousel-jumbo/carousel-jumbo.component';
import { FooterComponent } from './footer/footer.component';
import { TypeCheckboxComponent } from './type-checkbox/type-checkbox.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { HomeComponent } from './home/home.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { FoodCardComponent } from './food-card/food-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingDrawerComponent,
    CarouselJumboComponent,
    FooterComponent,
    TypeCheckboxComponent,
    RestaurantCardComponent,
    HomeComponent,
    RestaurantMenuComponent,
    FoodCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
