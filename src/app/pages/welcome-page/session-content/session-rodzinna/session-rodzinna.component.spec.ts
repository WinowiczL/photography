import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRodzinnaComponent } from './session-rodzinna.component';

describe('SessionRodzinnaComponent', () => {
  let component: SessionRodzinnaComponent;
  let fixture: ComponentFixture<SessionRodzinnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionRodzinnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionRodzinnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
