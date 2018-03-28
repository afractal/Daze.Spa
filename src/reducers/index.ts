export * from './types';
import { combineReducers, Reducer } from 'redux';
import postReducer from './postReducer';
import { RootState } from './types';

export default <Reducer<RootState>> combineReducers({
    post: postReducer
});

// dashboard
// leftnavbar
// shared
