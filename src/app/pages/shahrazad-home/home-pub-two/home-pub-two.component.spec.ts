import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePubTwoComponent } from './home-pub-two.component';

describe('HomePubTwoComponent', () => {
  let component: HomePubTwoComponent;
  let fixture: ComponentFixture<HomePubTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePubTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePubTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
