import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe3Component } from './exe3.component';

describe('Exe3Component', () => {
  let component: Exe3Component;
  let fixture: ComponentFixture<Exe3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exe3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
