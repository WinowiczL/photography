import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-content',
  templateUrl: './first-content.component.html',
  styleUrls: ['./first-content.component.scss']
})
export class FirstContentComponent implements OnInit {

  chosenSessionType = null;
  sessions = [
    {
      imageSrc: '/assets/carousel/3.JPG',
      imageAlt: 'sesja ciążowa',
      cardTitle: 'Sesja noworodkowa',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa'
      }
    },
    {
      imageSrc: '/assets/sessions/dziecieca.jpg',
      imageAlt: 'sesja ciążowa',
      cardTitle: 'Sesja dziecięca',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa'
      },
    },
    {
      imageSrc: '/assets/sessions/natala2.jpg',
      imageAlt: 'sesja ciążowa',
      cardTitle: 'Sesja ciążowa',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa'
      },
    },
    {
      imageSrc: '/assets/sessions/rodzinna.jpg',
      imageAlt: 'sesja ciążowa',
      cardTitle: 'Sesja rodzinna',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa'
      },
    },
    {
      imageSrc: '/assets/sessions/portret2.jpg',
      imageAlt: 'sesja ciążowa',
      cardTitle: 'Sesja portretowa',
      details: {
        text: 'Sesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowaSesja noworodkowa'
      },
    },
    {
      imageSrc: '/assets/sessions/slub2.jpg',
      imageAlt: 'sesja ciążowa',
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
