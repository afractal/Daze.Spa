export * from './types';
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import morePostsReducer from './morePostsReducer';
import postReducer from './postReducer';
import projectsReducer from './projectsReducer';
import { RootState } from './types';

export default combineReducers<RootState>({
    posts: postsReducer,
    morePosts: morePostsReducer,
    post: postReducer,
    projects: projectsReducer
});

// dashboard
// leftnavbar
// shared
