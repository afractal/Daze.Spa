import { BooksState } from '.';
import { BooksActions, BOOKS_REQUESTED, BOOKS_SUCCEEDED } from '../actions';

const initialState: BooksState = {
    items: [],
    loading: false
};

export default (state = initialState, action: BooksActions): BooksState => {
    switch (action.type) {
        case BOOKS_REQUESTED: {
            return { ...state, loading: true };
        }

        case BOOKS_SUCCEEDED: {
            const { books } = action.payload;
            return {
                ...state,
                loading: false,
                items: [...state.items, ...books]
            };
        }

        default:
            return state;
    }
};
