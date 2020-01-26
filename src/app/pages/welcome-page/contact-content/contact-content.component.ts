import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrls: ['./contact-content.component.scss']
})
export class ContactContentComponent implements OnInit {

  modelForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      telephone: '',
      question: ['', Validators.required],
      studio: ''
    });
  }

  onSubmit(form): void {
    console.log(form.value);
  }
}

