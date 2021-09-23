import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadLoginComponent } from './shahrazad-login.component';

describe('ShahrazadLoginComponent', () => {
  let component: ShahrazadLoginComponent;
  let fixture: ComponentFixture<ShahrazadLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
