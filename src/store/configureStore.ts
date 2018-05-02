import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { RootState } from '../reducers';
import { Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import initSagas from './initSagas';

const sagaMiddleware = createSagaMiddleware();

const configureStoreForDev = (): Store<RootState> => {
    const composeEnhancers = (
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) || compose;
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
