import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDrawerComponent } from './shopping-drawer.component';

describe('ShoppingDrawerComponent', () => {
  let component: ShoppingDrawerComponent;
  let fixture: ComponentFixture<ShoppingDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingDrawerComponent]
    });
    fixture = TestBed.createComponent(ShoppingDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
