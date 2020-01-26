import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionSlubnaComponent } from './session-slubna.component';

describe('SessionSlubnaComponent', () => {
  let component: SessionSlubnaComponent;
  let fixture: ComponentFixture<SessionSlubnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionSlubnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSlubnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
