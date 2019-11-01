import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap';

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

  modalRef: BsModalRef;
  config = {
    animated: true,
    class: 'gray modal-lg'
  };

  constructor(private modalService: BsModalService) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
