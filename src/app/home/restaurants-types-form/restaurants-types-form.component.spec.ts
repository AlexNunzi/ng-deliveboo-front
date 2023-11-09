import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsTypesFormComponent } from './restaurants-types-form.component';

describe('RestaurantsTypesFormComponent', () => {
  let component: RestaurantsTypesFormComponent;
  let fixture: ComponentFixture<RestaurantsTypesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsTypesFormComponent],
    });
    fixture = TestBed.createComponent(RestaurantsTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
