import { Component, OnInit } from '@angular/core';
import {sessionTypeImagePath} from "../../../../shared/images";

@Component({
  selector: 'app-session-dziecieca',
  templateUrl: './session-dziecieca.component.html',
  styleUrls: ['./session-dziecieca.component.scss']
})
export class SessionDzieciecaComponent implements OnInit {

  sessionDetails = {
    imageSrc: sessionTypeImagePath.sesjaDziecieca.imagePath,
    imageAlt: sessionTypeImagePath.sesjaDziecieca.imageAlt,
    cardTitle: 'Sesja dziecięca',
    details: {
      text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
      offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
