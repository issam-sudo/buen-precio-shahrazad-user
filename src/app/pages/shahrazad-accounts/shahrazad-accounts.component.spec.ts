import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadAccountsComponent } from './shahrazad-accounts.component';

describe('ShahrazadAccountsComponent', () => {
  let component: ShahrazadAccountsComponent;
  let fixture: ComponentFixture<ShahrazadAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
