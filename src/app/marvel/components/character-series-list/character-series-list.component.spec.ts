import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSeriesListComponent } from './character-series-list.component';

describe('CharacterSeriesListComponent', () => {
  let component: CharacterSeriesListComponent;
  let fixture: ComponentFixture<CharacterSeriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSeriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
