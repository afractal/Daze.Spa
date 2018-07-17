export * from './types';
import { combineReducers, Reducer } from 'redux';
import { RootState } from './types';
import postsReducer from './postsReducer';
import postReducer from './postReducer';
import projectsReducer from './projectsReducer';
import resourcesReducer from './resourcesReducer';
import skillsReducer from './skillsReducer';
import booksReducer from './booksReducer';

const rootReducer: Reducer<RootState> = combineReducers({
    posts: postsReducer,
    post: postReducer,
    projects: projectsReducer,
    resources: resourcesReducer,
    books: booksReducer,
    skills: skillsReducer
});

export default rootReducer;

// dashboard
// leftnavbar
// shared
