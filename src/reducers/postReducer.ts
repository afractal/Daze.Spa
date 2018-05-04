import { PostActions, POST_SUCCEEDED, POST_REQUESTED } from '../actions';
import { Post } from '../domain';
import { PostState } from '../reducers';

const initialState: PostState = {
    item: {} as Post,
    loading: false
};

export default (state = initialState, action: PostActions): PostState => {
    switch (action.type) {
        case POST_REQUESTED: {
            return { ...state, loading: true };
        }

        case POST_SUCCEEDED: {
            const item = action.payload.post;
            return {
                ...state,
                loading: false,
                item
            };
        }

        default:
            return state;
    }
};
