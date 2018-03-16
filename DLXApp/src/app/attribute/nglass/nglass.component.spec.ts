import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NglassComponent } from './nglass.component';

describe('NglassComponent', () => {
  let component: NglassComponent;
  let fixture: ComponentFixture<NglassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NglassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NglassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
