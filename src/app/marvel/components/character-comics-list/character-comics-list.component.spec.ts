import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComicsListComponent } from './character-comics-list.component';

describe('CharacterComicsListComponent', () => {
  let component: CharacterComicsListComponent;
  let fixture: ComponentFixture<CharacterComicsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterComicsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
