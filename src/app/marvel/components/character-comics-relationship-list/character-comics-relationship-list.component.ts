import { Component, OnInit } from '@angular/core';
import { MarvelStore } from '../../marvelStore.service';
import { MarvelService } from '../../services/marvel.service';
import { ActivatedRoute } from "@angular/router";
import { ICharacterApiResult } from '../../models/ICharacterApiResult';

@Component({
  selector: 'app-character-comics-relationship-list',
  templateUrl: './character-comics-relationship-list.component.html',
  styleUrls: ['./character-comics-relationship-list.component.css']
})
export class CharacterComicsRelationshipListComponent implements OnInit {

  constructor(private route: ActivatedRoute, public marvelStore: MarvelStore, private marvelService: MarvelService) { }

  id: string;

  characters : ICharacterApiResult;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var id = params["id"];
      this.id = id;
      this.marvelStore.initializeEvents(id);
      this.marvelService.getComicsCharacter(id).subscribe(
        foundCharacter => {
           this.characters = foundCharacter;
       });

    });
  }

}


