import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent {

  @Input()
  title;

  @Input()
  imageSrc;

  @Input()
  firstText;

  @Output()
  backToEmitter = new EventEmitter();

  onClick(event) {
    this.backToEmitter.emit(event);
  }

}
