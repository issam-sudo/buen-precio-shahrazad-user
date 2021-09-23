import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFoorColComponent } from './products-foor-col.component';

describe('ProductsFoorColComponent', () => {
  let component: ProductsFoorColComponent;
  let fixture: ComponentFixture<ProductsFoorColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsFoorColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFoorColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
