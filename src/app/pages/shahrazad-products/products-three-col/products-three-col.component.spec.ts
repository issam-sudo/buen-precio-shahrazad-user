import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsThreeColComponent } from './products-three-col.component';

describe('ProductsThreeColComponent', () => {
  let component: ProductsThreeColComponent;
  let fixture: ComponentFixture<ProductsThreeColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsThreeColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsThreeColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
