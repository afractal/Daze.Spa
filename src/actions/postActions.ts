import { createAction, PostPayloads, POST_REQUESTED } from '.';

export const requestPost = (payload: PostPayloads) =>
    createAction(POST_REQUESTED, payload);

export default {
    requestPost
};
