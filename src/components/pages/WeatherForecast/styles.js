import { makeStyles } from '@material-ui/core';
import logo from '../../../assets/logo.png';
import { Colors } from '../../../themes';

export default makeStyles(theme => ({
  viewContainer: {
    alignSelf:'center',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(' + logo + ')',  
    backgroundPosition: 'right 0 bottom 0',
    backgroundSize: '420px 360px',
    backgroundRepeat: 'no-repeat',
    padding: 30,
  },
  mainTitle: {
    color: Colors.theme,
    marginTop: '0.5%',
    fontSize: '50px',
    fontWeight: 900,
  },
  title: {
    marginTop: '1%',
    fontSize: '50px',
    width: '60%',
    textAlign: 'center',
    fontWeight: 'bolder',
    color: Colors.title,
  },
  inputText: {
    marginTop: 30,
    fontSize: '16px',
    color: Colors.input,
  },
  text: {
    marginTop: 8,
    color: Colors.input,
    borderRadius: 4,
    width: 320,
    fontSize: '16px',
    paddingLeft: 10,
    alignSelf: 'center',
  },
  button: {
    marginTop: 10,
    borderRadius: '3px',
    width: 128,
    marginBottom: 40,
    fontSize: '12px',
    textTransform: 'none',
    color: Colors.white,
    backgroundColor: Colors.button,
  },
  dropDown: {
    marginTop: 8,
    borderRadius: 4,
    width: 320,
    fontSize: 12,
    paddingLeft: 10,
    alignSelf: 'center',
  }
}));