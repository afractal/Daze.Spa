import { PostActions, POST_SUCCEEDED, POST_REQUESTED } from 'src/actions';
import { Post } from '../domain';
import { PostState } from 'src/reducers';

const initialState: PostState = {
    item: {} as Post,
    loading: false
};

export default (state = initialState, action: PostActions): PostState => {
    switch (action.type) {
        case POST_REQUESTED: {
            return { ...state };
        }

        case POST_SUCCEEDED: {
            const item = action.payload.post;
            return { ...state, item };
        }

        default:
            return state;
    }
};
