import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe4Component } from './exe4.component';

describe('Exe4Component', () => {
  let component: Exe4Component;
  let fixture: ComponentFixture<Exe4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exe4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exe4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
