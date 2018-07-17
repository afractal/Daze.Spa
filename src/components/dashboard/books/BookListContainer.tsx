import * as React from 'react';
import { Spinner } from '../../shared/spinner/Spinner';
import { Visibility } from '../../shared/visibility/Visibility';
import { BookList } from './BookList';
import { Book as BookDomain } from '../../../domain';

type BookListContainerProps = Readonly<{
}>;

const books: BookDomain[] = new Array(11).fill({
    // tslint:disable-next-line:max-line-length
    image: 'http://books.google.com/books/content?id=iPUuIirDFikC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE73EjeaX47iDCWOITG4hiT1xbhjZJ7AuycGV8ZeXFFnCE8akTFYUZuLExRRH5pBOYn2SBRgUSu0GORwjspqwb9Z8Xwtt0IQOy6ql0TK2YWANomTSG8uhEGfyfX_LXk2pz3rj4yO_&source=gbs_api',
    title: 'The Art Of War',
    authors: ['Bob', 'Jane']
});

export const BookListContainer = (props: BookListContainerProps) => {
    return (
        <React.StrictMode>
            <Visibility willShow={true}>
                <BookList books={books} />
            </Visibility>
            <Spinner willSpin={false} />
        </React.StrictMode>
    );
};