import { combineReducers } from 'redux';
import configureStore from '../store';
import rootSaga from '../sagas';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  weather: require('./WeatherRedux').reducer,
})

export default () => {
  let finalReducers = reducers

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('.').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }
  return store;
};

