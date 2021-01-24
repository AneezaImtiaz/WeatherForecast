import { put } from 'redux-saga/effects';
import { getWeatherData } from './WeatherSaga';
import WeatherActions from '../redux/WeatherRedux';

const stepper = (fn) => (mock) => fn.next(mock).value

const weather = {
  id: 1,
  description: "light snow",
};

const main = {
  feels_like: 271.22,
  temp: 274.72,
};

const item = id => ({
  id,
  dt_txt: "2021-01-24 12:00:00",
  main: main,
  weather: weather,
});

describe('Weather Api',  ()  => {

  let items = [item(1), item(2), item(3), item(4), item(5)];

  test('success path', () => {
    const response = {status: 200, data: {list: items}}
    const step = stepper(getWeatherData({}, 'Berlin', 'de'))
    step();
    expect(step(response)).toEqual(put(WeatherActions.getWeatherSuccess(response.data.list)))
  });

  test('failure path', () => {
    const response = {status: 404, statusText: 'Not found'}
    const step = stepper(getWeatherData({}, 'New York', 'de'))
    step();
    expect(step(response)).toEqual(put(WeatherActions.getWeatherFailure(response.statusText)))
  });
  
});
