import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
import { Colors } from '../../../themes';

const Loader = ({
  classes,
  size = 30,
  color = 'inherit',
}: {
  classes: { container: string },
  size: number,
  color: string,
}) => (
  <div data-testid="loader" className={classes.container}>
    <CircularProgress color="inherit" style={color ? { color } : {}} size={size} />
  </div>
);


const styles = () => ({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    color: Colors.input,
  },
});

export default withStyles(styles)(Loader);
