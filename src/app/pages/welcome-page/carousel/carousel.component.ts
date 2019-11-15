import {Component} from '@angular/core';
import {carouselImagePath} from '../../../shared/images';

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
    {image: carouselImagePath.carouselImage1.imagePath},
    {image: carouselImagePath.carouselImage2.imagePath},
    {image: carouselImagePath.carouselImage3.imagePath},
    {image: carouselImagePath.carouselImage4.imagePath},
  ];

  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

}
