import {
    PROJECTS_REQUESTED, ProjectsRequestedPayload, ProjectsRequestedType,
    Action, createAction, PROJECTS_SUCCEEDED, PROJECTS_FAILED
} from 'src/actions';
import { takeLatest, put } from 'redux-saga/effects';
import { Project } from 'src/domain';
import * as services from 'src/services';
import { HAL } from 'src/services';

export function* watchProjects() {
    yield takeLatest(PROJECTS_REQUESTED, fetchProjects);
}

function* fetchProjects(action: Action<ProjectsRequestedType, ProjectsRequestedPayload>) {
    try {
        const response: HAL<Project> = yield services.getProjects();
        yield put(
            createAction(PROJECTS_SUCCEEDED, {
                projects: response._embedded
            })
        );
    } catch {
        createAction(PROJECTS_FAILED, {});
        return;
    }
} 
