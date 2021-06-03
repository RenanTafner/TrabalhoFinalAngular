import { Component, OnInit } from '@angular/core';
import { MarvelStore } from '../../marvelStore.service';
import { ActivatedRoute } from "@angular/router";
import { MarvelService } from '../../services/marvel.service';
import { ISeriesApiResult } from '../../models/ISeriesApiResult';

@Component({
  selector: 'app-character-series-list',
  templateUrl: './character-series-list.component.html',
  styleUrls: ['./character-series-list.component.css']
})
export class CharacterSeriesListComponent implements OnInit {

  constructor(private route: ActivatedRoute, public marvelStore: MarvelStore, private marvelService: MarvelService) { }

  id: string;

  series : ISeriesApiResult;

  currentCharacterName: String;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      var id = params["id"];
      this.id = id;
      this.marvelStore.initializeEvents(id);

      this.marvelService.getCharacterSeries(id).subscribe(
        foundStories => {
           this.series = foundStories;
       });

       this.marvelService.getCharacterDetail(id).subscribe(
        foundCharacter => {
           this.currentCharacterName = foundCharacter.data.results[0].name;;
       });

     });
   
 }  

}
