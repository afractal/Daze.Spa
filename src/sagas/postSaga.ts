import {
    Action, createAction,
    PostRequestedType, PostRequestedPayload,
    POST_REQUESTED, POST_FAILED, POST_SUCCEEDED
} from 'src/actions';
import { takeLatest, put } from 'redux-saga/effects';
import * as services from 'src/services';
import { Post } from 'src/domain';
import { HAL } from 'src/services';

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
