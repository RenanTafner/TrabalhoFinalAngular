import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEventApiResult } from '../models/IEventApiResult';
import { IComicsApiResult } from '../models/IComicsApiResult';
import { IStoriesApiResult } from '../models/IStoriesApiResult';
import { ISeriesApiResult } from '../models/ISeriesApiResult';

import { ICharacterApiResult } from '../models/ICharacterApiResult';
import { ICharacterItem } from '../models/ICharacterItem';

@Injectable()
export class MarvelService {
  private API_KEY = 'c78db7463a0e30d5efeaff23f23b06ec&hash=1c715f1e3e23627fe16ccf7079361616';
  private BASE_URL = 'https://gateway.marvel.com:443/v1/public';

  characterDetail:ICharacterItem;

  currentCharacterName: string;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<ICharacterApiResult> {
    return this.http.get<ICharacterApiResult>(`${this.BASE_URL}/characters?ts=1&apikey=${this.API_KEY}`);
  }

  getCharacterDetail(id: string) : Observable<ICharacterApiResult>{

    return this.http.get<ICharacterApiResult>(`${this.BASE_URL}/characters/${id}?ts=1&apikey=${this.API_KEY}`);

  }

  getCharacterEvents(id: string) : Observable<IEventApiResult>{

    return this.http.get<IEventApiResult>(`${this.BASE_URL}/characters/${id}/events?ts=1&apikey=${this.API_KEY}`);

  }

  getCharacterComics(id: string) : Observable<IComicsApiResult>{
    return this.http.get<IComicsApiResult>(`${this.BASE_URL}/characters/${id}/comics?ts=1&apikey=${this.API_KEY}`);
  }

  getComicsCharacter(id: string) : Observable<ICharacterApiResult>{
    return this.http.get<ICharacterApiResult>(`${this.BASE_URL}/comics/${id}/characters?ts=1&apikey=${this.API_KEY}`);
  }

  getCharacterStories(id: string) : Observable<IStoriesApiResult>{
    return this.http.get<IStoriesApiResult>(`${this.BASE_URL}/characters/${id}/stories?ts=1&apikey=${this.API_KEY}`);
  }

  getCharacterSeries(id: string) : Observable<ISeriesApiResult>{
    return this.http.get<ISeriesApiResult>(`${this.BASE_URL}/characters/${id}/stories?ts=1&apikey=${this.API_KEY}`);
  }

}
