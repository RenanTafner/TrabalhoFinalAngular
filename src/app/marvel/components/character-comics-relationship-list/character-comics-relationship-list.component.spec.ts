import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComicsRelationshipListComponent } from './character-comics-relationship-list.component';

describe('CharacterComicsRelationshipListComponent', () => {
  let component: CharacterComicsRelationshipListComponent;
  let fixture: ComponentFixture<CharacterComicsRelationshipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterComicsRelationshipListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComicsRelationshipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
