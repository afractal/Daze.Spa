import { PostsActions, POSTS_REQUESTED, POSTS_SUCCEEDED } from '../actions';
import { PostsState } from '.';

const initialState: PostsState = {
    items: [],
    loading: false
};

export default (state = initialState, action: PostsActions): PostsState => {
    switch (action.type) {
        case POSTS_REQUESTED: {
            console.log('reducer requested', state);
            return { ...state };
        }

        case POSTS_SUCCEEDED: {
            const items = action.payload.posts;
            console.log('reducer succeeded', items);
            return { ...state, items };
        }

        default:
            return state;
    }
};
