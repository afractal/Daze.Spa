import { takeLatest, put } from 'redux-saga/effects';
import {
    POSTS_REQUESTED, Action, PostsRequestedType,
    PostsRequestedPayload, POSTS_FAILED, createAction, POSTS_SUCCEEDED
} from 'src/actions';

import * as services from 'src/services';
import { Post } from 'src/domain';
import { HAL } from 'src/services';

export function* watchPosts() {
    yield takeLatest(POSTS_REQUESTED, fetchPosts);
}

function* fetchPosts(action: Action<PostsRequestedType, PostsRequestedPayload>) {
    try {
        const response: HAL<Post> = yield services.getPosts();
        console.log('posts fetch', response);
        yield put(
            createAction(POSTS_SUCCEEDED, {
                posts: response._embedded
            })
        );
    } catch {
        createAction(POSTS_FAILED, {});
        return;
    }
}
