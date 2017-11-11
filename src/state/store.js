import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
export const history = createHistory();
const SagaMiddleware = createSagaMiddleware();
const rmiddleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(SagaMiddleware, rmiddleware)
    )  
)
SagaMiddleware.run(rootSaga);
export default store;
