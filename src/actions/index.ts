export * from './types';
export { default as postsActions } from './postsActions';
export { default as postActions } from './postActions';
export { default as projectsActions } from './projectsActions';

import { ActionTypes, ActionPayloads, AllAction } from './types';

export const createAction = (actionType: ActionTypes, payload: ActionPayloads): AllAction => ({
    payload: payload,
    type: actionType
});
