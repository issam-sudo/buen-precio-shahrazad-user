import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadNewslettersComponent } from './shahrazad-newsletters.component';

describe('ShahrazadNewslettersComponent', () => {
  let component: ShahrazadNewslettersComponent;
  let fixture: ComponentFixture<ShahrazadNewslettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadNewslettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadNewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
