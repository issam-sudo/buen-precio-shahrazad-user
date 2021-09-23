import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTwoColComponent } from './products-two-col.component';

describe('ProductsTwoColComponent', () => {
  let component: ProductsTwoColComponent;
  let fixture: ComponentFixture<ProductsTwoColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTwoColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTwoColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
