import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './marvel/components/characters-list/characters-list.component';
import { CharacterDetailComponent } from './marvel/components/character-detail/character-detail.component';
import { CharacterEventsListComponent } from './marvel/components/character-events-list/character-events-list.component';
import { CharacterComicsListComponent } from './marvel/components/character-comics-list/character-comics-list.component';
import { CharacterComicsRelationshipListComponent } from './marvel/components/character-comics-relationship-list/character-comics-relationship-list.component';
import { CharacterStoriesListComponent } from './marvel/components/character-stories-list/character-stories-list.component';
import { CharacterSeriesListComponent } from './marvel/components/character-series-list/character-series-list.component';


 const routes: Routes = [
{path: '', component: CharactersListComponent },
{path: 'character-detail-route/:id', component: CharacterDetailComponent},
{path: 'character-events-route/:id', component: CharacterEventsListComponent},
{path: 'character-comics-route/:id', component: CharacterComicsListComponent},
{path: 'comics-character-route/:id', component: CharacterComicsRelationshipListComponent},
{path: 'character-stories-route/:id', component: CharacterStoriesListComponent},
{path: 'character-series-route/:id', component: CharacterSeriesListComponent},


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }