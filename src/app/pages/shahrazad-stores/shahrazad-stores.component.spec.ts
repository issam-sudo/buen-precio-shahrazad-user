import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadStoresComponent } from './shahrazad-stores.component';

describe('ShahrazadStoresComponent', () => {
  let component: ShahrazadStoresComponent;
  let fixture: ComponentFixture<ShahrazadStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadStoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
