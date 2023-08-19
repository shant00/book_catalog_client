
export interface IBook {
    _id: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    reviews: [object];
    image: string;

    description: string;
    publishingDate: Date;
}