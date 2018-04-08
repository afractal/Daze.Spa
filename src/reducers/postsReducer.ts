import { PostsState } from '.';
import { PostsActions, POSTS_REQUESTED, POSTS_SUCCEEDED } from 'src/actions';

const initialState: PostsState = {
    items: [],
    loading: false
};

export default (state = initialState, action: PostsActions): PostsState => {
    switch (action.type) {
        case POSTS_REQUESTED: {
            return { ...state, loading: true };
        }

        case POSTS_SUCCEEDED: {
            const items = action.payload.posts;
            return {
                ...state,
                loading: false,
                items
            };
        }

        default:
            return state;
    }
};
