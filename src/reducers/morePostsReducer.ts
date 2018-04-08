import { MorePostsState } from '.';
import { MORE_POSTS_REQUESTED, MORE_POSTS_SUCCEEDED, MorePostsActions } from 'src/actions';

const initialState: MorePostsState = {
    items: [],
    loading: false,
    offset: 3,
    limit: 2
};

export default (state = initialState, action: MorePostsActions): MorePostsState => {
    switch (action.type) {
        case MORE_POSTS_REQUESTED: {
            return { ...state, loading: true };
        }

        case MORE_POSTS_SUCCEEDED: {
            const { offset, limit, posts } = action.payload;
            return {
                ...state,
                loading: false,
                offset: offset + limit,
                limit: limit,
                items: [...state.items, ...posts]
            };
        }

        default:
            return state;
    }
};
