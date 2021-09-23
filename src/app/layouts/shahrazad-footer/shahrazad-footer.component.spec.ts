import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadFooterComponent } from './shahrazad-footer.component';

describe('ShahrazadFooterComponent', () => {
  let component: ShahrazadFooterComponent;
  let fixture: ComponentFixture<ShahrazadFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
