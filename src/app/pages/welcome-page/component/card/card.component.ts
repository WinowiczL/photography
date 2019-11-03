import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  imageSource;

  @Input()
  imageAlt;

  @Input()
  cardTitle;

  @Output()
  chosenSessionType = new EventEmitter<string>();

  constructor() {

  }

  setChosenSessiontype(cardTitle) {
    this.chosenSessionType.emit(cardTitle);
  }

}
