import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MarvelService } from '../../services/marvel.service';
import { ICharacterItem } from "../../models/ICharacterItem";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: ICharacterItem;

  characterSrcImage: string;

  constructor(private route: ActivatedRoute, private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var id = params["id"];
     this.marvelService.getCharacterDetail(id).subscribe(
      foundCharacter => {
        this.character = foundCharacter.data.results[0];
        this.characterSrcImage = this.character.thumbnail.path + '.'+ this.character.thumbnail.extension;
     });
    });
  }
}