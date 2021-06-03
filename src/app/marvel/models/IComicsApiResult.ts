import { IComicsItem } from './IComicsItem';

export interface IComicsApiResult {
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
      results: IComicsItem[];
    },
    etag: string
  }