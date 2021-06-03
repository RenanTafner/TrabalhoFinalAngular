import { Component, OnInit } from '@angular/core';
import { MarvelStore } from '../../marvelStore.service';
import { ActivatedRoute } from "@angular/router";
import { MarvelService } from '../../services/marvel.service';
import { IStoriesApiResult } from '../../models/IStoriesApiResult';

@Component({
  selector: 'app-character-stories-list',
  templateUrl: './character-stories-list.component.html',
  styleUrls: ['./character-stories-list.component.css']
})
export class CharacterStoriesListComponent implements OnInit {

  constructor(private route: ActivatedRoute, public marvelStore: MarvelStore, private marvelService: MarvelService) { }

  id: string;

  stories : IStoriesApiResult;

  currentCharacterName: String;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      var id = params["id"];
      this.id = id;
      this.marvelStore.initializeEvents(id);

      this.marvelService.getCharacterStories(id).subscribe(
        foundStories => {
             this.stories = foundStories;
       });

       this.marvelService.getCharacterDetail(id).subscribe(
        foundCharacter => {
           this.currentCharacterName = foundCharacter.data.results[0].name;;
       });

     });
   
 }  

}
