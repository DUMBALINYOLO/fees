import React, { Fragment } from 'react';
import Wrapper from '../home/Wrapper';
import Services from './PublicServices';
import Corporate from '../../containers/Templates/Corporate';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'primary',
    paddingTop: '65px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});


function TestimnonialsSections(props) {
  const { classes } = props;
  return (
    <Corporate>
      <div className={classes.root}>
          <Services  />
      </div>
    </ Corporate>
  );
}


export default withStyles(styles)(TestimnonialsSections);