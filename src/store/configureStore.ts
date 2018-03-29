import { createStore, applyMiddleware } from 'redux';
import rootReducer, { RootState } from '../reducers';
import { Store } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import initSagas from '../sagas/initSagas';

const sagaMiddleware = createSagaMiddleware();

const configureStoreForDev = (): Store<RootState> => {
    const store = createStore<RootState>(
        rootReducer,
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        // @ts-ignore
        applyMiddleware(
            sagaMiddleware,
            loggerMiddleware,
            immutableStateInvariantMiddleware()
        )
    );
    initSagas(sagaMiddleware);
    return store;
};

const configureStoreForProd = (): Store<RootState> => {
    const store = createStore<RootState>(
        rootReducer,
        applyMiddleware(
            sagaMiddleware
        )
    );
    initSagas(sagaMiddleware);
    return store;
};

export const configureStore = (): (() => Store<RootState>) =>
    process.env.NODE_ENV === 'production' ?
        configureStoreForProd :
        configureStoreForDev;
