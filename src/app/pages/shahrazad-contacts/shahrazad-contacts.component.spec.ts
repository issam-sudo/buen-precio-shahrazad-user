import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadContactsComponent } from './shahrazad-contacts.component';

describe('ShahrazadContactsComponent', () => {
  let component: ShahrazadContactsComponent;
  let fixture: ComponentFixture<ShahrazadContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
