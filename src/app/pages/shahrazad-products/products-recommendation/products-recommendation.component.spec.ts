import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRecommendationComponent } from './products-recommendation.component';

describe('ProductsRecommendationComponent', () => {
  let component: ProductsRecommendationComponent;
  let fixture: ComponentFixture<ProductsRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
