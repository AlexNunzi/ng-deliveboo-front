import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-jumbo',
  templateUrl: './carousel-jumbo.component.html',
  styleUrls: ['./carousel-jumbo.component.scss'],
})
export class CarouselJumboComponent {
  carouselImages: String[] = [
    '/assets/img/carne-carousel.jpg',
    '/assets/img/cozze-vongole.jpg',
    '/assets/img/hamburger-carousel.jpg',
    '/assets/img/risotto-carousel.jpg',
    '/assets/img/sushi-carousel.jpg',
  ];
}
