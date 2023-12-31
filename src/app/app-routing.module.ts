import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurant-menu/:slug', component: RestaurantMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
