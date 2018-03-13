import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenttwo1Component } from './contenttwo-1.component';

describe('Contenttwo1Component', () => {
  let component: Contenttwo1Component;
  let fixture: ComponentFixture<Contenttwo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contenttwo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contenttwo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
