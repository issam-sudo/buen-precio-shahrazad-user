import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadCheckoutComponent } from './shahrazad-checkout.component';

describe('ShahrazadCheckoutComponent', () => {
  let component: ShahrazadCheckoutComponent;
  let fixture: ComponentFixture<ShahrazadCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
