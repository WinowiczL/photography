import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPortretowaComponent } from './session-portretowa.component';

describe('SessionPortretowaComponent', () => {
  let component: SessionPortretowaComponent;
  let fixture: ComponentFixture<SessionPortretowaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionPortretowaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionPortretowaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
