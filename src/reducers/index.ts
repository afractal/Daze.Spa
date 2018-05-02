export * from './types';
import { combineReducers, Reducer } from 'redux';
import { RootState } from './types';
import postsReducer from './postsReducer';
import postReducer from './postReducer';
import projectsReducer from './projectsReducer';

const rootReducer: Reducer<RootState> = combineReducers({
    posts: postsReducer,
    post: postReducer,
    projects: projectsReducer
});

export default rootReducer;

// dashboard
// leftnavbar
// shared
