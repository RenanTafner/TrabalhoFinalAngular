import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { MarvelService } from './services/marvel.service';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import {AppRoutingModule} from '../app.routing.module';
import { CharacterComicsListComponent } from './components/character-comics-list/character-comics-list.component';
import { CharacterComicsRelationshipListComponent } from './components/character-comics-relationship-list/character-comics-relationship-list.component';
import { CharacterStoriesListComponent } from './components/character-stories-list/character-stories-list.component';
import { CharacterSeriesListComponent } from './components/character-series-list/character-series-list.component';

@NgModule({
  declarations: [CharactersListComponent, CharacterDetailComponent, CharacterComicsListComponent, CharacterComicsRelationshipListComponent, CharacterStoriesListComponent, CharacterSeriesListComponent],
  exports: [CharactersListComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule,FormsModule,AppRoutingModule],
  providers: [MarvelService]
})
export class MarvelModule {}
