import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionOfWinComponent } from './prediction-of-win.component';

describe('PredictionOfWinComponent', () => {
  let component: PredictionOfWinComponent;
  let fixture: ComponentFixture<PredictionOfWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionOfWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionOfWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
