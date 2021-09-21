import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Corporate from '../../containers/Templates/CustomerWrapper';
import AOS from "aos";
import 'aos/dist/aos.css';
import UnPaidInvoices from './UnPaidInvoices';
import PartiallyPaidInvoices from './PartiallyPaidInvoices';
import FullyPaidInvoices from './FullyPaidInvoices';



function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    paddingTop: '40px',
    backgroundColor: theme.palette.background.paper,
  },
  tabs:{
    backgroundColor: theme.palette.background.paper
  }
});

const ScrollIconTabs = (props) => {
  const [value, setValue] = useState(0)
  const { classes, token } = props;

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  const handleChange = (event, value) => {
    setValue(value);
  };


  return (
    <>
    {token !== null ?
        <Corporate>
          <div className={classes.root} data-aos="fade-right">
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="secondary"
                className={classes.tabs}
              >
                <Tab label="UNPAID" />
                <Tab label="PARTIALLY PAID" />
                <Tab label="FULLY PAID" />
              </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><UnPaidInvoices/></TabContainer>}
            {value === 1 && <TabContainer><PartiallyPaidInvoices/></TabContainer>}
            {value === 2 && <TabContainer><FullyPaidInvoices/></TabContainer>}
          </div>
        </Corporate>
        : <Redirect to='/login' />
    }
    </>
  );
}

ScrollIconTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  email : state.auth.email,
  token: state.auth.token,
  userName: state.auth.userName,
});


const PaymentsMapped = connect(
  mapStateToProps,
  {
  }
)(ScrollIconTabs);


export default withStyles(styles)(PaymentsMapped);




