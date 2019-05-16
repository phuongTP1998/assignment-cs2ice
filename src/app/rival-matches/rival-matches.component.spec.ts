import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivalMatchesComponent } from './rival-matches.component';

describe('RivalMatchesComponent', () => {
  let component: RivalMatchesComponent;
  let fixture: ComponentFixture<RivalMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RivalMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivalMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
