import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantApiService } from './services/restaurantApi.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { ShoppingDrawerComponent } from './partials/header/shopping-drawer/shopping-drawer.component';
import { CarouselJumboComponent } from './home/carousel-jumbo/carousel-jumbo.component';
import { FooterComponent } from './partials/footer/footer.component';
import { TypeCheckboxComponent } from './home/type-checkbox/type-checkbox.component';
import { RestaurantCardComponent } from './home/restaurant-card/restaurant-card.component';
import { HomeComponent } from './home/home.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { FoodCardComponent } from './shared/food-card/food-card.component';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestaurantApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
