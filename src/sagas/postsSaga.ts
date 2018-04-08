import {
    createAction, Action, PostsRequestedType, PostsRequestedPayload,
    POSTS_REQUESTED, POSTS_FAILED, POSTS_SUCCEEDED
} from 'src/actions';
import { takeLatest, put } from 'redux-saga/effects';
import * as services from 'src/services';
import { Post } from 'src/domain';
import { HAL } from 'src/services';

export function* watchPosts() {
    yield takeLatest(POSTS_REQUESTED, fetchPosts);
}

function* fetchPosts(action: Action<PostsRequestedType, PostsRequestedPayload>) {
    try {
        const { offset, limit } = action.payload;
        const response: HAL<Post> = yield services.getPosts(offset, limit);
        yield put(
            createAction(POSTS_SUCCEEDED, {
                posts: response._embedded,
                offset,
                limit
            })
        );
    } catch {
        createAction(POSTS_FAILED, {});
        return;
    }
}
