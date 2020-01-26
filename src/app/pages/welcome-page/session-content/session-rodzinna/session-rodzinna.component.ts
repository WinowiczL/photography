import { Component, OnInit } from '@angular/core';
import {sessionTypeImagePath} from '../../../../shared/images';

@Component({
  selector: 'app-session-rodzinna',
  templateUrl: './session-rodzinna.component.html',
  styleUrls: ['./session-rodzinna.component.scss']
})
export class SessionRodzinnaComponent implements OnInit {

  sessionDetails = {
    imageSrc: sessionTypeImagePath.sesjaRodzinna.imagePath,
    imageAlt: sessionTypeImagePath.sesjaRodzinna.imageAlt,
    cardTitle: 'Sesja rodzinna',
    details: {
      text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
      offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
