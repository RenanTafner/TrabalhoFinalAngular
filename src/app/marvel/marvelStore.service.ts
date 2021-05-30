import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICharacterItem } from './models/ICharacterItem';
import { IEventItem } from './models/IEventItem';
import { HttpClient } from '@angular/common/http';
import { MarvelService } from './services/marvel.service';

@Injectable({
providedIn: 'root'
})

export class MarvelStore {
    
constructor(private http: HttpClient, private marvelService: MarvelService) {
}

private readonly _characters = new BehaviorSubject<ICharacterItem[]>( []);
readonly characters$ = this._characters.asObservable();

private get characters(): ICharacterItem[] {
    return this._characters.getValue();
}

private set characters(val: ICharacterItem[]) {
    this._characters.next(val);
}

initializeCharacters(){
    this.marvelService.getCharacters().subscribe(response => {
        this.characters = response.data.results;
});
  
}

private readonly _events = new BehaviorSubject<IEventItem[]>( []);
readonly events$ = this._events.asObservable();

private get events(): IEventItem[] {
    return this._events.getValue();
}

private set events(val: IEventItem[]) {
    this._events.next(val);
}

initializeEvents(id:string){
    this.marvelService.getCharacterEvents(id).subscribe(response => {
        this.events = response.data.results;
});
  
}

}