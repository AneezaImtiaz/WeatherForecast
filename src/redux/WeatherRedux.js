import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getWeatherRequest: ['headers', 'city', 'countryCode'],
  getWeatherSuccess: ['payload'],
  getWeatherFailure: ['errorMsg']
})

export const WeatherTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  results: [],
  fetching: false,
  error: null,
  errorMsg: ''
})

/* ------------- Reducers ------------- */

export const getWeatherRequest = (state, { data }) => {
  return state.merge({fetching: true, data, results: [], errorMsg: ''})
}

export const getWeatherSuccess = (state, action) => {
  const {payload} = action

  return state.merge({ fetching: false,
    results: payload,
    error: null
  })
}

// Something went wrong somewhere.
export const getWeatherFailure = (state, {errorMsg}) => {
  return state.merge({ fetching: false, results: [], error: true, errorMsg, payload: null })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_WEATHER_REQUEST]: getWeatherRequest,
  [Types.GET_WEATHER_SUCCESS]: getWeatherSuccess,
  [Types.GET_WEATHER_FAILURE]: getWeatherFailure
})
