import { takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { WeatherTypes } from '../redux/WeatherRedux';

/* ------------- Sagas ------------- */

import { getWeatherData } from './WeatherSaga';


/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    yield takeLatest(WeatherTypes.GET_WEATHER_REQUEST, getWeatherData, []),
  ])
}
