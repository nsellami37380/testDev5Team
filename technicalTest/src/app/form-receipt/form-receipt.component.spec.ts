import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReceiptComponent } from './form-receipt.component';

describe('FormReceiptComponent', () => {
  let component: FormReceiptComponent;
  let fixture: ComponentFixture<FormReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
