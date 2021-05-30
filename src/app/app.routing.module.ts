import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './marvel/components/characters-list/characters-list.component';
import { CharacterDetailComponent } from './marvel/components/character-detail/character-detail.component';
import { CharacterEventsListComponent } from './marvel/components/character-events-list/character-events-list.component';

 const routes: Routes = [
{path: '', component: CharactersListComponent },
{path: 'character-detail-route/:id', component: CharacterDetailComponent},
{path: 'character-events-route/:id', component: CharacterEventsListComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }