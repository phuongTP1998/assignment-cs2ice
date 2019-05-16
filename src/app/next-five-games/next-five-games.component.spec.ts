import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextFiveGamesComponent } from './next-five-games.component';

describe('NextFiveGamesComponent', () => {
  let component: NextFiveGamesComponent;
  let fixture: ComponentFixture<NextFiveGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextFiveGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextFiveGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
