import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({
    sagaMonitor
});

const enhacer = process.env.NODE_ENV === 'development' ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhacer);

sagaMiddleware.run(rootSagas);

export default store;