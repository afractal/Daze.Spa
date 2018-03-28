import { createStore, applyMiddleware } from 'redux';
import immutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer, { RootState } from '../reducers';
import { Store } from 'react-redux';

export const configureStore = (): Store<RootState> => {
    return createStore(
        rootReducer,
        applyMiddleware(
            immutableStateInvariant()
        )
    );
};
