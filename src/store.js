import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

export const reducers = combineReducers({
  cityData: require('./redux/WeatherRedux').reducer,
})
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga)

export default store;
