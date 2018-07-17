export * from './types';
export { default as postsActions } from './postsActions';
export { default as postActions } from './postActions';
export { default as projectsActions } from './projectsActions';
export { default as resourcesActions } from './resourcesActions';
export { default as skillsActions } from './skillsActions';
export { default as booksActions } from './booksActions';

import { ActionTypes, ActionPayloads, AllAction } from './types';

export const createAction = (actionType: ActionTypes, payload: ActionPayloads): AllAction => ({
    payload: payload,
    type: actionType
});
