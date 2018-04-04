export * from './types';
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postReducer from './postReducer';
import projectsReducer from './projectsReducer';
import { RootState } from './types';

export default combineReducers<RootState>({
    posts: postsReducer,
    post: postReducer,
    projects: projectsReducer
});

// dashboard
// leftnavbar
// shared
