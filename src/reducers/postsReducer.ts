import { PostsState } from '.';
import { PostsActions, POSTS_REQUESTED, POSTS_SUCCEEDED } from '../actions';

const initialState: PostsState = {
    items: [],
    loading: false,
    offset: 1,
    limit: 2
};

export default (state = initialState, action: PostsActions): PostsState => {
    switch (action.type) {
        case POSTS_REQUESTED: {
            return { ...state, loading: true };
        }

        case POSTS_SUCCEEDED: {
            const { posts, offset, limit } = action.payload;
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
