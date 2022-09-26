import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacionesComponent } from './interpolaciones.component';

describe('InterpolacionesComponent', () => {
  let component: InterpolacionesComponent;
  let fixture: ComponentFixture<InterpolacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
