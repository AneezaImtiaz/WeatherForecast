import { render, screen } from './testUtils';
import App from './App';

document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});
describe('app',  ()  => {
  test('weather forecast', () => {
    render(<App />, {
      initialState: {
        cityData: { results: [], fetching: false, errorMsg: '' },
      },
      reducer: require('./redux/WeatherRedux').reducer,
    });
    expect(screen.getByTestId('weatherForecast')).toBeInTheDocument();
  });
});
