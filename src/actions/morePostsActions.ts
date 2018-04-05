import { createAction, PostsPayloads, MORE_POSTS_REQUESTED } from './';

export const requstMorePosts = (payload: PostsPayloads) =>
    createAction(MORE_POSTS_REQUESTED, payload);

export default {
    requstMorePosts
};