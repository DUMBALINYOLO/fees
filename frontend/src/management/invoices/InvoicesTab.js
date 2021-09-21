import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout';
import PendingInvoices from './pending/Invoices';
import UnpaidInvoices from './unpaid/Invoices';
import PartiallyPaidInvoices from './partially/Invoices';
import FullyPaidInvoices from './paid/Invoices';




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
              className = 'card-box-hover-rise'
            >
              <Tab label="PENDING" />
              <Tab label="UNPAID" />
              <Tab label="PARTIALLY PAID" />
              <Tab label="FULLY PAID" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><PendingInvoices/></TabContainer>}
          {value === 1 && <TabContainer><UnpaidInvoices/></TabContainer>}
          {value === 2 && <TabContainer><PartiallyPaidInvoices/></TabContainer>}
          {value === 3 && <TabContainer><FullyPaidInvoices/></TabContainer>}
        </div>
      </ManagementLayout>
    );
}



export default withStyles(styles)(Invoices);
