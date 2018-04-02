import { PostsState } from '.';
import { PostsActions, POSTS_REQUESTED, POSTS_SUCCEEDED } from 'src/actions';

const initialState: PostsState = {
    items: [],
    loading: false
};

export default (state = initialState, action: PostsActions): PostsState => {
    switch (action.type) {
        case POSTS_REQUESTED: {
            return { ...state };
        }

        case POSTS_SUCCEEDED: {
            const items = action.payload.posts;
            return { ...state, items };
        }

        default:
            return state;
    }
};
