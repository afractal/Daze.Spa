import * as React from 'react';
import './Book.css';

type BookProps = Readonly<{
    image: string
    title: string
    authors: string[]
}>;

const formatAuthors = (authors: string[]) => (
    authors.join(', ')
);

export const Book = (props: BookProps) => (
    <div className="book-template" >
        <img
            className="book-image"
            src={props.image}
        />
        <div className="book-body">
            <div className="book-title">
                {props.title}
            </div>
            <div className="book-authors">
                {formatAuthors(props.authors)}
            </div>
        </div>
    </div>
);
