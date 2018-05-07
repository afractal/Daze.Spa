import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { RootState } from '../reducers';
import { Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import initSagas from './initSagas';

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger({
    collapsed: true,
    duration: true,
    diff: true
});

const configureStoreForDev = (): Store<RootState> => {
    // @ts-ignore
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
            loggerMiddleware,
            immutableStateInvariantMiddleware()
        )
    );

    const store = createStore(rootReducer, enhancer);
    initSagas(sagaMiddleware);
    return store;
};

const configureStoreForProd = (): Store<RootState> => {
    const enhancer = compose(
        applyMiddleware(
            sagaMiddleware
        )
    );

    const store = createStore(rootReducer, enhancer);
    initSagas(sagaMiddleware);
    return store;
};

export const configureStore = (): (() => Store<RootState>) =>
    process.env.NODE_ENV === 'production' ?
        configureStoreForProd :
        configureStoreForDev;
