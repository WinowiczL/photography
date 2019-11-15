import {Component, OnInit} from '@angular/core';
import { sessionTypeImagePath } from '../../../shared/images';

@Component({
  selector: 'app-first-content',
  templateUrl: './first-content.component.html',
  styleUrls: ['./first-content.component.scss']
})
export class FirstContentComponent implements OnInit {

  chosenSessionType = null;
  sessions = [
    {
      imageSrc: sessionTypeImagePath.sesjaNoworodkowa.imagePath,
      imageAlt: sessionTypeImagePath.sesjaNoworodkowa.imageAlt,
      cardTitle: 'Sesja noworodkowa',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa'
      }
    },
    {
      imageSrc: sessionTypeImagePath.sesjaDziecieca.imagePath,
      imageAlt: sessionTypeImagePath.sesjaDziecieca.imageAlt,
      cardTitle: 'Sesja dziecięca',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa'
      },
    },
    {
      imageSrc: sessionTypeImagePath.sesjaCiazowa.imagePath,
      imageAlt: sessionTypeImagePath.sesjaCiazowa.imageAlt,
      cardTitle: 'Sesja ciążowa',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa'
      },
    },
    {
      imageSrc: sessionTypeImagePath.sesjaRodzinna.imagePath,
      imageAlt: sessionTypeImagePath.sesjaRodzinna.imageAlt,
      cardTitle: 'Sesja rodzinna',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa'
      },
    },
    {
      imageSrc: sessionTypeImagePath.sesjaPortretowa.imagePath,
      imageAlt: sessionTypeImagePath.sesjaPortretowa.imageAlt,
      cardTitle: 'Sesja portretowa',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa'
      },
    },
    {
      imageSrc: sessionTypeImagePath.sesjaSlubna.imagePath,
      imageAlt: sessionTypeImagePath.sesjaSlubna.imageAlt,
      cardTitle: 'Reportaż ślubny',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa'
      },
    }
  ];

  setChosenSessionType(cardTitle) {
    this.chosenSessionType = this.sessions.find(session => session.cardTitle === cardTitle);
  }

  setEmptyChosenSession() {
    this.chosenSessionType = null;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
