import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDzieciecaComponent } from './session-dziecieca.component';

describe('SessionDzieciecaComponent', () => {
  let component: SessionDzieciecaComponent;
  let fixture: ComponentFixture<SessionDzieciecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionDzieciecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDzieciecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
