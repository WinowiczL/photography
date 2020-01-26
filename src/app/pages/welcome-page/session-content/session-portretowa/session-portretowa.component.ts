import { Component, OnInit } from '@angular/core';
import {sessionTypeImagePath} from "../../../../shared/images";

@Component({
  selector: 'app-session-portretowa',
  templateUrl: './session-portretowa.component.html',
  styleUrls: ['./session-portretowa.component.scss']
})
export class SessionPortretowaComponent implements OnInit {

  sessionDetails =  {
    imageSrc: sessionTypeImagePath.sesjaPortretowa.imagePath,
    imageAlt: sessionTypeImagePath.sesjaPortretowa.imageAlt,
    cardTitle: 'Sesja portretowa',
    details: {
      text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
      offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
