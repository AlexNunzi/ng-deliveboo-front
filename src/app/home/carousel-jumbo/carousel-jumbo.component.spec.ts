import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselJumboComponent } from './carousel-jumbo.component';

describe('CarouselJumboComponent', () => {
  let component: CarouselJumboComponent;
  let fixture: ComponentFixture<CarouselJumboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselJumboComponent],
    });
    fixture = TestBed.createComponent(CarouselJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
