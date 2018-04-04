import {
    createAction, POSTS_REQUESTED,
    PostsPayloads, PostPayloads, POST_REQUESTED
} from './';

export const requestPosts = (payload: PostsPayloads) =>
    createAction(POSTS_REQUESTED, payload);

export const requestPost = (payload: PostPayloads) =>
    createAction(POST_REQUESTED, payload);

export default {
    requestPosts,
    requestPost
};
