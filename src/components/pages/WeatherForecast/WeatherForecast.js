import React, { useState } from 'react';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import WeatherActions from '../../../redux/WeatherRedux'
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography, TextField, makeStyles } from '@material-ui/core';
import Card from '../../molecules/Card/Card';
import Loader from '../../molecules/Loader/Loader';
import appContants from '../../../constants/appConstants';
import { Colors } from '../../../themes';

const { weather } = appContants;

const WeatherForecast = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [error, setError] = useState('');
    const [dropDownError, setDropdownError] = useState('');

    const data = useSelector(state => state.cityData.results.length === 0 ? [] : state.cityData.results);
    const noData = useSelector(state => state.cityData.errorMsg);
    const loading = useSelector(state => state.cityData.fetching);
    const [text, setText] = useState(weather.textHint);

    const countries = [
        { name: 'Germany', code: 'de'},
        { name: 'Pakistan', code: 'pk'},
        { name: 'Australia', code: 'au'} ];

    const useTextFieldStyles = makeStyles({
      container: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: ((noData === weather.noRecord && city !== '') || error) ? Colors.error : Colors.title
        },
        marginTop: 8,
        borderRadius: 4,
        width: 320,
        fontSize: 12,
        paddingLeft: 10,
        alignSelf: 'center',
      },
    });

    const useDropDownStyles = makeStyles({
      container: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: dropDownError ? Colors.error : Colors.title
        },
        marginTop: '5%',
        borderRadius: 4,
        width: 320,
        fontSize: 12,
        paddingLeft: 10,
        alignSelf: 'center',
      },
    });

    const textFieldStyle = useTextFieldStyles();
    const dropDownStyle = useDropDownStyles();

    const cityWeather = async () => {
      if (!countryCode) {
        setDropdownError(true);
        dispatch(WeatherActions.getWeatherFailure('error'));
        return;
      }
      if (!city) {
        setError(true);
        dispatch(WeatherActions.getWeatherFailure('error'));
        return;
      }
      setDropdownError('');
      setError('');
      dispatch(WeatherActions.getWeatherRequest({}, city, countryCode))
    };

  return (
    <div data-testid="weatherForecast" className={classes.viewContainer}>

      <Typography className={classes.mainTitle}>{weather.mainTitle}</Typography>
      <Typography className={classes.title}>{weather.title}</Typography>

      <Autocomplete
        id="combo-box-demo"
        className={dropDownStyle.container}
        options={countries}
        value={countryCode.code}
        onChange={(event, newInputValue)=> {
          setDropdownError(false);
          setCountryCode(newInputValue ? newInputValue.code : '')}}
        getOptionDisabled={e => e.code === countryCode}
        getOptionLabel={option => (option.name ? `${option.name} ` : '')}
        renderInput={params => (
          <TextField
            {...params}
            label={countryCode ? weather.country : weather.countryHint}
            variant="outlined"
            error={dropDownError}
          />
        )}
      />

      <Typography className={classes.inputText}
        style={ noData === weather.noRecord && city !== '' ? {color: Colors.error} : {color: Colors.input} } >
          {noData === weather.noRecord && city !== '' ? weather.textOtherHint : text}
      </Typography>

      <TextField
        variant="outlined"
        margin="normal"
        size="small" 
        fullWidth
        inputProps={{ style: { textAlign: 'center' }}}
        className={textFieldStyle.container}
        value={city}
        onSubmitEditing={cityWeather}
        onChange={e => {
          setError(false);
          setText(weather.textHint)
          setCity(e.target.value)
          if (e.target.value === '') { dispatch(WeatherActions.getWeatherFailure('error'))}}}
        id="outlined-basic"
        error={error}
      />

      <Button
        onClick={cityWeather}
        fullWidth
        data-testid="requestWeather"
        variant="contained"
        className={classes.button}> 
          {loading ? <Loader size={20} /> : weather.button}
      </Button>

      {data.length > 0 && data.map(item => (
        <Card item={item} />
        ))}
      </div>
  );
}

export default WeatherForecast;
