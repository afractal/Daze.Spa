export * from './types';
export { default as postActions } from './postsActions';

import { ActionTypes, ActionPayloads, AllAction } from './types';

export const createAction = (actionType: ActionTypes, payload: ActionPayloads): AllAction => ({
    payload: payload,
    type: actionType
});
