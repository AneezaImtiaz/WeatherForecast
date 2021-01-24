import React from 'react';
import useStyles from './styles';
import { Typography, Box } from '@material-ui/core';
import appContants from '../../../constants/appConstants';
import { Colors } from '../../../themes';
import DateTimeService from '../../../services/DateTimeService';

const { weather } = appContants;
const { card } = weather;

const Card = ({item}) => {

  const classes = useStyles();
  
  return (
    <Box display="flex" justifyContent="center">
      <Box  borderRadius={8} borderColor={Colors.title} bgcolor={Colors.white} m={1} border={1} className={classes.card}>
        <div className={classes.innerCard}>
          <Typography className={classes.date}>
              {card.date+', '+DateTimeService.getDate(item.dt_txt)}
          </Typography>
          <Typography className={classes.time}>
            {DateTimeService.getTime(item.dt_txt)}
          </Typography>
        </div>
          <Typography className={classes.temperature}>
            {card.temperature+': '+item.main.temp+' K'}
          </Typography>
          <Typography className={classes.temperature}>
            {card.feelTemperature+': '+item.main.feels_like+' K'}
          </Typography>
          <Typography align={'center'}  display={'block'} className={classes.description}>
            {item.weather[0]?.description}
          </Typography>
        </Box>
      </Box>
)};

export default Card;
