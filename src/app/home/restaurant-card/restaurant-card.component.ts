import { Component, Input } from '@angular/core';
import { Restaurant } from '../../api/models/restaurant.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent {
  @Input() restaurant: Restaurant;

  environment = environment;
}
