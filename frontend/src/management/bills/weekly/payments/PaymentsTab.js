import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AOS from "aos";
import 'aos/dist/aos.css';
import UnverifiedPayments from './UnverifiedPayments';
import Payments from './Payments';



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
  const {
    classes,
    mobilepayments,
    cardpayments,
    transferpayments,
    cashpayments,
    unverifiedpayments,
  } = props;

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  const handleChange = (event, value) => {
    setValue(value);
  };


  return (
    <>
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
            <Tab label="UNVERIFIED" />
            <Tab label="CASH" />
            <Tab label="MOBILE" />
            <Tab label="DEBIT CARD" />
            <Tab label="TRANSFER" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><UnverifiedPayments payments={unverifiedpayments}/></TabContainer>}
        {value === 1 && <TabContainer><Payments payments={cashpayments}/></TabContainer>}
        {value === 2 && <TabContainer><Payments payments={mobilepayments}/></TabContainer>}
        {value === 3 && <TabContainer><Payments payments={cardpayments}/></TabContainer>}
        {value === 4 && <TabContainer><Payments payments={transferpayments}/></TabContainer>}
      </div>
    </>
  );
}

ScrollIconTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollIconTabs);
