import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadCartsComponent } from './shahrazad-carts.component';

describe('ShahrazadCartsComponent', () => {
  let component: ShahrazadCartsComponent;
  let fixture: ComponentFixture<ShahrazadCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadCartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
