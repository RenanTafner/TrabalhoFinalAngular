import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MarvelModule } from './marvel/marvel.module';
import { AppRoutingModule } from './app.routing.module';
import { CharacterEventsListComponent } from './marvel/components/character-events-list/character-events-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterEventsListComponent
  ],
  imports: [
    BrowserModule,
    MarvelModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
