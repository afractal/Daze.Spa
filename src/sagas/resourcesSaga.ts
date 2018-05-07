import {
    RESOURCES_REQUESTED, ResourcesRequestedPayload, ResourcesRequestedType,
    Action, createAction, RESOURCES_SUCCEEDED, RESOURCES_FAILED
} from '../actions';
import { takeLatest, put } from 'redux-saga/effects';
import { Resource } from '../domain';
import * as services from '../services';
import { HAL } from '../services';

export function* watchResources() {
    yield takeLatest(RESOURCES_REQUESTED, fetchResources);
}

function* fetchResources(action: Action<ResourcesRequestedType, ResourcesRequestedPayload>) {
    try {
        const response: HAL<Resource> = yield services.getResources();
        yield put(
            createAction(RESOURCES_SUCCEEDED, {
                resources: response._embedded
            })
        );
    } catch {
        createAction(RESOURCES_FAILED, {});
        return;
    }
}
