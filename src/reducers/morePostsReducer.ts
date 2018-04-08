import { MorePostsState } from '.';
import { MORE_POSTS_REQUESTED, MORE_POSTS_SUCCEEDED, MorePostsActions } from 'src/actions';

const initialState: MorePostsState = {
    items: [],
    loading: false
};

export default (state = initialState, action: MorePostsActions): MorePostsState => {
    switch (action.type) {
        case MORE_POSTS_REQUESTED: {
            return { ...state, loading: true };
        }

        case MORE_POSTS_SUCCEEDED: {
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
