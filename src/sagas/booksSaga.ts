import {
    Action, createAction,
    BooksRequestedPayload, BooksRequestedType,
    BOOKS_REQUESTED, BOOKS_SUCCEEDED, BOOKS_FAILED
} from '../actions';
import { takeLatest, put } from 'redux-saga/effects';
import { Book } from '../domain';
import * as services from '../services';
import { HAL } from '../services';

export function* watchfetchBooks() {
    yield takeLatest(BOOKS_REQUESTED, fetchBooks);
}

function* fetchBooks(action: Action<BooksRequestedType, BooksRequestedPayload>) {
    try {
        const response: HAL<Book> = yield services.getBooks();
        yield put(
            createAction(BOOKS_SUCCEEDED, {
                resources: response._embedded
            })
        );
    } catch {
        createAction(BOOKS_FAILED, {});
        return;
    }
}
