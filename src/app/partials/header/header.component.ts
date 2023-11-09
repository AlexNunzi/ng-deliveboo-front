import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ShopState } from 'src/app/store/shop.state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Select(ShopState.getTotalQuantity) totalQuantity$: Observable<number>;

  environment = environment;
}
