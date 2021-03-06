export interface ISeriesItem {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    urls: any[];
    startYear: number;
    endYear: number;
    rating: string;
    type: string;
    modified: Date;
    thumbnail: any;
    creators: any;
    characters: any;
    stories: any;
    comics: any;
    events: any;
    next?: any;
    previous?: any;
}