import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStoriesListComponent } from './character-stories-list.component';

describe('CharacterStoriesListComponent', () => {
  let component: CharacterStoriesListComponent;
  let fixture: ComponentFixture<CharacterStoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterStoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterStoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
