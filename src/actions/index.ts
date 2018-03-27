
export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_SUCCEEDED = 'POSTS_SUCCEEDED';
export const POSTS_FAILED = 'POSTS_FAILED';

type POSTS_REQUESTED_TYPE = 'POSTS_REQUESTED';
type POSTS_SUCCEEDED_TYPE = 'POSTS_SUCCEEDED';
type POSTS_FAILED_TYPE = 'POSTS_FAILED';

type POSTS_REQUESTED_ACTION = {};
type POSTS_SUCCEEDED_ACTION = {};
type POSTS_FAILED_ACTION = {};

type ActionTypes =
    POSTS_REQUESTED_TYPE |
    POSTS_SUCCEEDED_TYPE |
    POSTS_FAILED_TYPE
    ;

type ActionPayloads =
    POSTS_REQUESTED_ACTION |
    POSTS_SUCCEEDED_ACTION |
    POSTS_FAILED_ACTION
    ;

export const createAction = (actionType: ActionTypes, payload: ActionPayloads) => ({
    payload: payload,
    type: actionType
});

export const requestPosts = (payload: ActionPayloads) =>
    createAction(POSTS_REQUESTED, payload);
