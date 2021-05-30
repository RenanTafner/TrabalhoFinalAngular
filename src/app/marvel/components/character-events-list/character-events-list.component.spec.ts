import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEventsListComponent } from './character-events-list.component';

describe('CharacterEventsListComponent', () => {
  let component: CharacterEventsListComponent;
  let fixture: ComponentFixture<CharacterEventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterEventsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
