import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-content',
  templateUrl: './first-content.component.html',
  styleUrls: ['./first-content.component.scss']
})
export class FirstContentComponent implements OnInit {

  firstCardImageSrc = '/assets/carousel/3.JPG';
  firstCardImageAlt = 'sesja ciążowa';
  firstCardTitle = 'Sesja noworodkowa';

  secondCardImageSrc = '/assets/sessions/dziecieca.jpg';
  secondCardImageAlt = 'sesja ciążowa';
  secondCardTitle = 'Sesja dziecięca';

  thirdCardImageSrc = '/assets/sessions/natala2.jpg';
  thirdCardImageAlt = 'sesja ciążowa';
  thirdCardTitle = 'Sesja ciążowa';

  fourthCardImageSrc = '/assets/sessions/rodzinna.jpg';
  fourthCardImageAlt = 'sesja ciążowa';
  fourthCardTitle = 'Sesja rodzinna';

  fifthCardImageSrc = '/assets/sessions/portret2.jpg';
  fifthCardImageAlt = 'sesja ciążowa';
  fifthCardTitle = 'Sesja portretowa';

  sixthCardImageSrc = '/assets/sessions/slub2.jpg';
  sixthCardImageAlt = 'sesja ciążowa';
  sixthCardTitle = 'Reportaż ślubny';



  constructor() { }

  ngOnInit() {
  }

}
