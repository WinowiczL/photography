import { Component, OnInit } from '@angular/core';
import {sessionTypeImagePath} from "../../../../shared/images";

@Component({
  selector: 'app-session-slubna',
  templateUrl: './session-slubna.component.html',
  styleUrls: ['./session-slubna.component.scss']
})
export class SessionSlubnaComponent implements OnInit {

  sessionDetails = {
    imageSrc: sessionTypeImagePath.sesjaSlubna.imagePath,
    imageAlt: sessionTypeImagePath.sesjaSlubna.imageAlt,
    cardTitle: 'Reportaż ślubny',
    details: {
      text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
      offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
