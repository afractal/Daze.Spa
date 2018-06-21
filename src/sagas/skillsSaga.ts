import {
    Action, createAction,
    SkillsRequestedPayload, SkillsRequestedType,
    SKILLS_REQUESTED, SKILLS_SUCCEEDED, SKILLS_FAILED
} from '../actions';
import { takeLatest, put } from 'redux-saga/effects';
import { Skill } from '../domain';
import * as services from '../services';
import { HAL } from '../services';

export function* watchSkills() {
    yield takeLatest(SKILLS_REQUESTED, fetchSkills);
}

function* fetchSkills(action: Action<SkillsRequestedType, SkillsRequestedPayload>) {
    try {
        const response: HAL<Skill> = yield services.getSkills();
        yield put(
            createAction(SKILLS_SUCCEEDED, {
                resources: response._embedded
            })
        );
    } catch {
        createAction(SKILLS_FAILED, {});
        return;
    }
}
