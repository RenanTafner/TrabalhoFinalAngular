export interface IComicsItem {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description?: any;
    modified: Date;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: any[];
    resourceURI: string;
    urls: any[];
    series: any;
    variants: any[];
    collections: any[];
    collectedIssues: any[];
    dates: Date[];
    prices: any[];
    thumbnail: any;
    images: any[];
    creators: any;
    characters: any;
    stories: any;
    events: any;
  }

