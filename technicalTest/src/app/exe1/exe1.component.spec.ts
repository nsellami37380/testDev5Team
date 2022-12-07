import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe1Component } from './exe1.component';

describe('Exe1Component', () => {
  let component: Exe1Component;
  let fixture: ComponentFixture<Exe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exe1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
