import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadWishlistComponent } from './shahrazad-wishlist.component';

describe('ShahrazadWishlistComponent', () => {
  let component: ShahrazadWishlistComponent;
  let fixture: ComponentFixture<ShahrazadWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
