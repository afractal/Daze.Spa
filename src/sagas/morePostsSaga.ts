import {
    Action, createAction, MorePostsRequestedPayload, MorePostsRequestedType,
    MORE_POSTS_SUCCEEDED, MORE_POSTS_REQUESTED, MORE_POSTS_FAILED
} from 'src/actions';
import { takeLatest, put } from 'redux-saga/effects';
import * as services from 'src/services';
import { Post } from 'src/domain';
import { HAL } from 'src/services';

export function* watchMorePosts() {
    yield takeLatest(MORE_POSTS_REQUESTED, fetchMorePosts);
}

function* fetchMorePosts(action: Action<MorePostsRequestedType, MorePostsRequestedPayload>) {
    try {
        const response: HAL<Post> = yield services.getPostsPaginated(1, 1);
        yield put(
            createAction(MORE_POSTS_SUCCEEDED, {
                posts: response._embedded
            })
        );
    } catch {
        createAction(MORE_POSTS_FAILED, {});
        return;
    }
}
