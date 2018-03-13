import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenttwo2Component } from './contenttwo-2.component';

describe('Contenttwo2Component', () => {
  let component: Contenttwo2Component;
  let fixture: ComponentFixture<Contenttwo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contenttwo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contenttwo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
