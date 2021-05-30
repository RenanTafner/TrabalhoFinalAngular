import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { MarvelService } from './services/marvel.service';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import {AppRoutingModule} from '../app.routing.module';

@NgModule({
  declarations: [CharactersListComponent, CharacterDetailComponent],
  exports: [CharactersListComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule,FormsModule,AppRoutingModule],
  providers: [MarvelService]
})
export class MarvelModule {}
