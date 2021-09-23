import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadErrorsComponent } from './shahrazad-errors.component';

describe('ShahrazadErrorsComponent', () => {
  let component: ShahrazadErrorsComponent;
  let fixture: ComponentFixture<ShahrazadErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
