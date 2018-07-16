import * as React from 'react';
import './BookList.css';
import { Book as BookDomain } from '../../../domain';
import { Book } from './book/Book';

type BookListProps = {
    books: BookDomain[]
};

const mapToBook = (book: BookDomain, index: number) => (
    <Book
        key={index}
        {...book}
    />
);

const renderBooks = (books: BookDomain[]) =>
    books.map(mapToBook);

export const BookList = (props: BookListProps) => (
    <section className="books-section">
        <div className="book-list">
            {renderBooks(props.books)}
        </div>
    </section>
);
