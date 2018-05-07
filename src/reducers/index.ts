export * from './types';
import { combineReducers, Reducer } from 'redux';
import { RootState } from './types';
import postsReducer from './postsReducer';
import postReducer from './postReducer';
import projectsReducer from './projectsReducer';
import resourcesReducer from './resourcesReducer';

const rootReducer: Reducer<RootState> = combineReducers({
    posts: postsReducer,
    post: postReducer,
    projects: projectsReducer,
    resources: resourcesReducer
});

export default rootReducer;

// dashboard
// leftnavbar
// shared
