import { createAction, BOOKS_REQUESTED, BooksPayloads } from '.';

export const requestBooks = (payload: BooksPayloads) =>
    createAction(BOOKS_REQUESTED, payload);

export default {
    requestBooks
};
