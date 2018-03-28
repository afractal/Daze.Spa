export * from './types';
export { default as postActions } from './postActions';

import { ActionTypes, ActionPayloads, Action } from './types';

export const createAction = (actionType: ActionTypes, payload: ActionPayloads): Action => ({
    payload: payload,
    type: actionType
});
