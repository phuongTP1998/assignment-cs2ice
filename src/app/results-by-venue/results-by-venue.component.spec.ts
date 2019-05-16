import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsByVenueComponent } from './results-by-venue.component';

describe('ResultsByVenueComponent', () => {
  let component: ResultsByVenueComponent;
  let fixture: ComponentFixture<ResultsByVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsByVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsByVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
