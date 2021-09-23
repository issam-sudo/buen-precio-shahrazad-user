import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadMobileBarComponent } from './shahrazad-mobile-bar.component';

describe('ShahrazadMobileBarComponent', () => {
  let component: ShahrazadMobileBarComponent;
  let fixture: ComponentFixture<ShahrazadMobileBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadMobileBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadMobileBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
