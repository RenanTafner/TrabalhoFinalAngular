import { Component, OnInit } from '@angular/core';
import { MarvelStore } from '../../marvelStore.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  constructor(
    public marvelStore: MarvelStore
) {}

  ngOnInit(): void {
    this.marvelStore.initializeCharacters();
  }

}
