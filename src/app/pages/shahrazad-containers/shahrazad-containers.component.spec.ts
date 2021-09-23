import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadContainersComponent } from './shahrazad-containers.component';

describe('ShahrazadContainersComponent', () => {
  let component: ShahrazadContainersComponent;
  let fixture: ComponentFixture<ShahrazadContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadContainersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
