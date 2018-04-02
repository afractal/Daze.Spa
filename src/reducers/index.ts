export * from './types';
import { combineReducers } from 'redux';
import postReducer from './postsReducer';
import projectReducer from './projectsReducer';
import { RootState } from './types';

export default combineReducers<RootState>({
    posts: postReducer,
    projects: projectReducer
});

// dashboard
// leftnavbar
// shared
