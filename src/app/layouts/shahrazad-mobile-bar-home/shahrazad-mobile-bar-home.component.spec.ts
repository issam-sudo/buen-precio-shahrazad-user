import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadMobileBarHomeComponent } from './shahrazad-mobile-bar-home.component';

describe('ShahrazadMobileBarHomeComponent', () => {
  let component: ShahrazadMobileBarHomeComponent;
  let fixture: ComponentFixture<ShahrazadMobileBarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadMobileBarHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadMobileBarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
