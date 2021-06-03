import { IStoriesItem } from './IStoriesItem';

export interface IStoriesApiResult {
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
      results: IStoriesItem[];
    },
    etag: string
  }