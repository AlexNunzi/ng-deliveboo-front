import { Component, Input } from '@angular/core';
import { Type } from 'src/app/api/models/type.model';


@Component({
  selector: 'app-type-checkbox',
  templateUrl: './type-checkbox.component.html',
  styleUrls: ['./type-checkbox.component.scss']
})
export class TypeCheckboxComponent {
  @Input() type: Type;

  constructor() {}

}
