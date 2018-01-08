import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInforComponent } from './product-infor.component';

describe('ProductInforComponent', () => {
  let component: ProductInforComponent;
  let fixture: ComponentFixture<ProductInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
