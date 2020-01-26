import {Component} from '@angular/core';
import {sessionTypeImagePath} from '../../../../shared/images';

@Component({
  selector: 'app-session-noworodkowa',
  templateUrl: './session-noworodkowa.component.html',
  styleUrls: ['./session-noworodkowa.component.scss']
})
export class SessionNoworodkowaComponent {

  sessionDetails = {
    imageSrc: sessionTypeImagePath.sesjaNoworodkowa.imagePath,
    imageAlt: sessionTypeImagePath.sesjaNoworodkowa.imageAlt,
    cardTitle: 'Sesja noworodkowa',
    details: {
      text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa',
      offer: '15 zdjęc 10zł. a 20 zdjęc to 40zł'
    }
  };
}
