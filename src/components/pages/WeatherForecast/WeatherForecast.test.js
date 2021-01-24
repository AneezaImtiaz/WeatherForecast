import { render, screen, fireEvent } from '../../../testUtils';
import WeatherForecast from './WeatherForecast';

document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});


describe('weather',  ()  => {
  test('weather forecast', async () => {
    render(<WeatherForecast/>, {
      initialState: {
        cityData: { results: [], fetching: true, errorMsg: '' },
      },
      reducer: require('../../../redux/WeatherRedux').reducer,
    });

    expect(screen.getByTestId('loader')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('requestWeather'));

    const getWeather = jest.fn().mockName('getWeatherRequest');
    await getWeather({}, 'berlin');
    expect(getWeather).toHaveBeenCalledTimes(1);
  });
});

