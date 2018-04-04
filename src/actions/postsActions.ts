import { createAction, POSTS_REQUESTED, PostsPayloads } from './';

export const requestPosts = (payload: PostsPayloads) =>
    createAction(POSTS_REQUESTED, payload);

export default {
    requestPosts
};
