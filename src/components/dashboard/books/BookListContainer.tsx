import * as React from 'react';
import { Spinner } from '../../shared/spinner/Spinner';
import { Visibility } from '../../shared/visibility/Visibility';
import { BookList } from './BookList';
import { Book as BookDomain } from '../../../domain';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { RootState } from '../../../reducers';
import { BooksPayloads, booksActions } from '../../../actions';

type BookListContainerDispatch = Readonly<{
    fetchBooks: (payload: BooksPayloads) => void
}>;

type BookListContainerOwnProps = Readonly<{
}>;

type BookListContainerProps = BookListContainerDispatch & BookListContainerOwnProps & Readonly<{
    books: BookDomain[]
    boolean: boolean
}>;

const books: BookDomain[] = new Array(11).fill({
    // tslint:disable-next-line:max-line-length
    image: 'https://images-na.ssl-images-amazon.com/images/I/51T7Pr0pjZL._SX328_BO1,204,203,200_.jpg',
    title: 'The Art Of War',
    authors: ['Author Pence', 'Jane', 'Author Pence', 'Author Pence']
});

export const BookListContainerComponent = (props: BookListContainerProps) => {
    return (
        <React.StrictMode>
            <Visibility willShow={true}>
                <BookList books={books} />
            </Visibility>
            <Spinner willSpin={false} />
        </React.StrictMode>
    );
};

const mapStateToProps = (state: RootState) => ({
    books: state.books.items,
    loading: state.books.loading
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): BookListContainerDispatch => (
    bindActionCreators({
        fetchBooks: booksActions.requestBooks
    }, dispatch)
);

export const BookListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookListContainerComponent);
