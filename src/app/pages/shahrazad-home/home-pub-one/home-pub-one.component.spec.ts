import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePubOneComponent } from './home-pub-one.component';

describe('HomePubOneComponent', () => {
  let component: HomePubOneComponent;
  let fixture: ComponentFixture<HomePubOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePubOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePubOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
