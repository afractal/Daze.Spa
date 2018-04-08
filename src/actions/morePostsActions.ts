import { createAction, PostsPayloads, MORE_POSTS_REQUESTED } from './';

export const requestMorePosts = (payload: PostsPayloads) =>
    createAction(MORE_POSTS_REQUESTED, payload);

export default {
    requestMorePosts
};
