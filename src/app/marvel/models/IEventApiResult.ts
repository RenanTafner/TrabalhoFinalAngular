import { IEventItem } from './IEventItem';

export interface IEventApiResult {
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
      results: IEventItem[];
    },
    etag: string
  }