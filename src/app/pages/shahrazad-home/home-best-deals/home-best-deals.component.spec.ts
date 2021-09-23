import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBestDealsComponent } from './home-best-deals.component';

describe('HomeBestDealsComponent', () => {
  let component: HomeBestDealsComponent;
  let fixture: ComponentFixture<HomeBestDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBestDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBestDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
