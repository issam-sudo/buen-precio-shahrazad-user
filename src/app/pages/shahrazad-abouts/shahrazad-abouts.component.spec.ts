import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadAboutsComponent } from './shahrazad-abouts.component';

describe('ShahrazadAboutsComponent', () => {
  let component: ShahrazadAboutsComponent;
  let fixture: ComponentFixture<ShahrazadAboutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadAboutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadAboutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
