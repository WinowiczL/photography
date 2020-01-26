import {Component, OnInit} from '@angular/core';
import {sessionTypeImagePath} from "../../../../shared/images";

@Component({
  selector: 'app-session-ciazowa',
  templateUrl: './session-ciazowa.component.html',
  styleUrls: ['./session-ciazowa.component.scss']
})
export class SessionCiazowaComponent implements OnInit {

  sessionDetails =  {
    imageSrc: sessionTypeImagePath.sesjaCiazowa.imagePath,
    imageAlt: sessionTypeImagePath.sesjaCiazowa.imageAlt,
    cardTitle: 'Sesja ciążowa',
    details: {
      text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
      offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
    },
  };

  constructor() {
  }

  ngOnInit() {
  }

}
