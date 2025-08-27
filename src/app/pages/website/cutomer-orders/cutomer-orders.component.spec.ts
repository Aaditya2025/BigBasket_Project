import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerOrdersComponent } from './cutomer-orders.component';

describe('CutomerOrdersComponent', () => {
  let component: CutomerOrdersComponent;
  let fixture: ComponentFixture<CutomerOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CutomerOrdersComponent]
    });
    fixture = TestBed.createComponent(CutomerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
