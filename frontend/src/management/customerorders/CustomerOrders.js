import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout';
import PendingInvoices from './pending/Invoices';
import CompletedCustomerOrders from './completed/Invoices';





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
    backgroundColor: theme.palette.background.paper,
  },
});
const Invoices = (props)   => {
    const [value, setValue] = useState(0)
    const { classes } = props;


  const handleChange = (event, value) => {
    setValue(value );
  };


    return (
      <ManagementLayout>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="secondary"
              className='bg-royal card-box-hover-rise'
            >
              <Tab label="PENDING" />
              <Tab label="COMPLETED" />
              <Tab label="CANCELLED" />
              <Tab label="REJECTED" />
              <Tab label="REFUNDED" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><PendingInvoices/></TabContainer>}
          {value === 1 && <TabContainer><CompletedCustomerOrders/></TabContainer>}
          {value === 2 && <TabContainer></TabContainer>}
          {value === 3 && <TabContainer></TabContainer>}
          {value === 4 && <TabContainer></TabContainer>}
        </div>
      </ManagementLayout>
    );
}



export default withStyles(styles)(Invoices);
