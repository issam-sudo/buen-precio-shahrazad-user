import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadHeaderHomeComponent } from './shahrazad-header-home.component';

describe('ShahrazadHeaderHomeComponent', () => {
  let component: ShahrazadHeaderHomeComponent;
  let fixture: ComponentFixture<ShahrazadHeaderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadHeaderHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadHeaderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
