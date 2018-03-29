export * from './types';
export { default as postActions } from './postsActions';

import { ActionTypes, ActionPayloads, Action } from './types';

export const createAction = (actionType: ActionTypes, payload: ActionPayloads): Action => ({
    payload: payload,
    type: actionType
});
