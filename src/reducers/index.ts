export * from './types';
import { combineReducers } from 'redux';
import postReducer from './postsReducer';
import { RootState } from './types';

export default combineReducers<RootState>({
    posts: postReducer
});

// dashboard
// leftnavbar
// shared
