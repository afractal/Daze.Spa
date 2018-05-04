
import * as sagas from '../sagas';
import { SagaMiddleware } from 'redux-saga';

export default <T>(sagaMiddleware: SagaMiddleware<T>) => {
    Object
        .values(sagas)
        .forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
