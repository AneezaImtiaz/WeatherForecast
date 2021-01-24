import { put } from 'redux-saga/effects';
import WeatherActions from '../redux/WeatherRedux';
import Api from '../services/ApiService.js';

export function * getWeatherData ({}, action) {

  const {city} = action;
  const {countryCode} = action;

  const response = yield Api.get( `2.5/forecast?q=${city+','+countryCode}&appid=${'7f48e38c1d358f87bd19118c52a228bb'}`, true);
  debugger
  if (response.status === 200) {
    yield put(WeatherActions.getWeatherSuccess(response.data.list))
  } else if (response?.statusText) {
    yield put(WeatherActions.getWeatherFailure(response.statusText))
  } 
}
