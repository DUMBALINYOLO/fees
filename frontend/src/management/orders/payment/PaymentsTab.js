import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import UnverifiedPayments from './UnverifiedPayments';
import CashPayments from './CashPayments';




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

class ScrollIconTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="fullWidth"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="secondary"
            >
              <Tab label="UNVERIFIED" />
              <Tab label="CASH" />
              <Tab label="DEBIT CARDS" />
              <Tab label="MOBILE" />
              <Tab label="TRANSFER" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><UnverifiedPayments payments={this.props.unverifiedorderpayments}/></TabContainer>}
          {value === 1 && <TabContainer><CashPayments payments={this.props.cashorderpayments}/></TabContainer>}
          {value === 2 && <TabContainer><CashPayments payments={this.props.debitcardorderpayments}/></TabContainer>}
          {value === 3 && <TabContainer><CashPayments payments={this.props.mobileorderpayments}/></TabContainer>}
          {value === 4 && <TabContainer><CashPayments payments={this.props.transferorderpayments}/></TabContainer>}
        </div>
      </>
    );
  }
}

ScrollIconTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollIconTabs);
