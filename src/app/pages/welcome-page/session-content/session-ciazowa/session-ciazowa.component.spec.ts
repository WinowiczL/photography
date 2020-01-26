import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCiazowaComponent } from './session-ciazowa.component';

describe('SessionCiazowaComponent', () => {
  let component: SessionCiazowaComponent;
  let fixture: ComponentFixture<SessionCiazowaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionCiazowaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionCiazowaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
