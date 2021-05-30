import { Component, OnInit } from '@angular/core';
import { MarvelStore } from '../../marvelStore.service';
import { ActivatedRoute } from "@angular/router";
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-character-events-list',
  templateUrl: './character-events-list.component.html',
  styleUrls: ['./character-events-list.component.css']
})
export class CharacterEventsListComponent implements OnInit {

  constructor(private route: ActivatedRoute, public marvelStore: MarvelStore, private marvelService: MarvelService) {}

  id: string;

  currentCharacterName:string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var id = params["id"];
      this.id = id;
      this.marvelStore.initializeEvents(id);
      this.marvelService.getCharacterDetail(id).subscribe(
        foundCharacter => {
          this.currentCharacterName = foundCharacter.data.results[0].name;
       });
    });
  }

}
