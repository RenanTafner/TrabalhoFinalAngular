import { ICharacterItem } from './ICharacterItem';


export interface ICharacterApiResult {
    code: number,
    status: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    data: {
      offset: number,
      limit: number,
      total: number,
      count: number,
      results: ICharacterItem[];
    },
    etag: string
  }