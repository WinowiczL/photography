import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionNoworodkowaComponent } from './session-noworodkowa.component';

describe('SessionNoworodkowaComponent', () => {
  let component: SessionNoworodkowaComponent;
  let fixture: ComponentFixture<SessionNoworodkowaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionNoworodkowaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionNoworodkowaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
