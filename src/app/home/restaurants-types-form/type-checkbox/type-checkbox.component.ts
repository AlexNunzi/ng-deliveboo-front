import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Type } from 'src/app/api/models/type.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-type-checkbox',
  templateUrl: './type-checkbox.component.html',
  styleUrls: ['./type-checkbox.component.scss'],
})
export class TypeCheckboxComponent {
  @Input() type: Type;
  @Input() formGroup: FormGroup;

  environment = environment;

  constructor() {}
}
