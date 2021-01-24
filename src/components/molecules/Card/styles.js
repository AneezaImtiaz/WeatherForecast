import { makeStyles } from '@material-ui/core';
import { Colors } from '../../../themes';

export default makeStyles(theme => ({
  card: {
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    width: 320,
    height: 130,
    padding: 22,
  },
  innerCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: '12px',
    fontWeight: 600,
    color: Colors.button,
  },
  time: {
    fontSize: '12px',
    fontWeight: 600,
    color: Colors.button,
  },
  temperature: {
    fontSize: '16px',
    marginTop: 6,
    fontWeight: 580,
    color: Colors.temperature,
  },
  description: {
    fontSize: '10px',
    display: 'flex',
    padding: 10,
    marginTop: 16,
    height: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
    backgroundColor: Colors.descriptionBackground,
    fontWeight: 540,
    color: Colors.description,
  },
}));