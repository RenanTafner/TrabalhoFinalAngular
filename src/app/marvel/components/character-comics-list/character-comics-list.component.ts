import { Component, OnInit } from '@angular/core';
import { MarvelStore } from '../../marvelStore.service';
import { ActivatedRoute } from "@angular/router";
import { MarvelService } from '../../services/marvel.service';
import { IComicsApiResult } from '../../models/IComicsApiResult';

@Component({
  selector: 'app-character-comics-list',
  templateUrl: './character-comics-list.component.html',
  styleUrls: ['./character-comics-list.component.css']
})
export class CharacterComicsListComponent implements OnInit {

  constructor(private route: ActivatedRoute, public marvelStore: MarvelStore, private marvelService: MarvelService) { }

  id: string;

  comics : IComicsApiResult;

  currentCharacterName: String;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var id = params["id"];
      this.id = id;
      this.marvelStore.initializeEvents(id);
      this.marvelService.getCharacterComics(id).subscribe(
        foundComics => {
           this.comics = foundComics;
       });

       this.marvelService.getCharacterDetail(id).subscribe(
        foundCharacter => {
           this.currentCharacterName = foundCharacter.data.results[0].name;;
       });

    });
  }

}

