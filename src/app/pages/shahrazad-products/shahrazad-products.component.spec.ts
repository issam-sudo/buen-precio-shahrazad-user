import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadProductsComponent } from './shahrazad-products.component';

describe('ShahrazadProductsComponent', () => {
  let component: ShahrazadProductsComponent;
  let fixture: ComponentFixture<ShahrazadProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
