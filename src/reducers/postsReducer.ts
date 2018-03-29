import { PostsActions, POSTS_REQUESTED } from '../actions';
import { PostsState } from '.';

const initialState: PostsState = {
};

export default (state = initialState, action: PostsActions): PostsState => {
    switch (action.type) {
        case POSTS_REQUESTED:
            return state;

        default:
            return state;
    }
};
