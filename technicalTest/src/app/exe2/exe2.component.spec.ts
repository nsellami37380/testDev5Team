import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe2Component } from './exe2.component';

describe('Exe2Component', () => {
  let component: Exe2Component;
  let fixture: ComponentFixture<Exe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exe2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
