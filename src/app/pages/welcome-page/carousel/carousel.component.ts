import {Component} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  itemsPerSlide = 1;
  singleSlideOffset = false;
  noWrap = false;
  slidesChangeMessage = '';
  myInterval = 2000;

  slides = [
    {image: 'assets/carousel/1.JPG'},
    {image: 'assets/carousel/2.JPG'},
    {image: 'assets/carousel/3.JPG'},
    {image: 'assets/carousel/4.JPG'},
  ];

  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

}
