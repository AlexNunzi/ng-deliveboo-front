import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Type } from 'src/app/api/models/type.model';

@Component({
  selector: 'app-restaurants-types-form',
  templateUrl: './restaurants-types-form.component.html',
  styleUrls: ['./restaurants-types-form.component.scss']
})
export class RestaurantsTypesFormComponent implements OnInit, OnChanges, OnDestroy{
  @Output() searchRestaurants: EventEmitter<number[]> = new EventEmitter();

  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.checkboxForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(((() => {
      let checkedIds = Object.keys(this.checkboxForm.value)
      .filter(key => this.checkboxForm.value[key] === true)
      .map(key => +key);
      this.searchRestaurants.emit(checkedIds);
    })));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['typeList']){
      this.checkboxForm = this.formBuilder.group(this.typeList.reduce((acc, element) => {
        return {...acc, [element.id]: false}
      }, 
      {}
      ));
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @Input() typeList: Type[];
  
  checkboxForm: FormGroup = new FormGroup({});

  constructor(private readonly formBuilder: FormBuilder) {}
}
