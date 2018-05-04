import { takeLatest, put } from 'redux-saga/effects';
import * as services from '../services';
import { Post } from '../domain';
import { HAL } from '../services';
import {
    Action, createAction,
    PostRequestedType, PostRequestedPayload,
    POST_REQUESTED, POST_FAILED, POST_SUCCEEDED
} from '../actions';

export function* watchPost() {
    yield takeLatest(POST_REQUESTED, fetchPost);
}

function* fetchPost(action: Action<PostRequestedType, PostRequestedPayload>) {
    try {
        const slug = action.payload.slug;
        const response: HAL<Post> = yield services.getPost(slug);
        yield put(
            createAction(POST_SUCCEEDED, {
                post: response._embedded
            })
        );
    } catch {
        createAction(POST_FAILED, {});
        return;
    }
}
