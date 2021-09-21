import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout';
import DailyTab from './DaillyTab';
import WeeklyTab from './WeeklyTab';
import BiMonthlyTab from './BiMonthlyTab';
import MonthlyTab from './MonthlyTab';
import QuarterlyTab from './QuarterlyTab';
import BiAnnuallyTab from './BiAnnuallyTab';
import AnnuallyTab from './AnnuallyTab';
import OnceOffTab from './OnceOffTab';



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
      <ManagementLayout>
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
              <Tab label="DAILY" />
              
              <Tab label="WEEKLY" />
              <Tab label="BI-MONTHLY" />
              <Tab label="MONTHLY" />
              <Tab label="QUARTERLY" />
              <Tab label="BI-ANNUALLY" />
              <Tab label="ANNUALLY" />
              <Tab label="ONCEOFF" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><DailyTab/></TabContainer>}
          {value === 1 && <TabContainer><WeeklyTab/></TabContainer>}
          {value === 2 && <TabContainer> <BiMonthlyTab/> </TabContainer>}
          {value === 3 && <TabContainer><MonthlyTab/></TabContainer>}
          {value === 4 && <TabContainer><QuarterlyTab/></TabContainer>}
          {value === 5 && <TabContainer><BiAnnuallyTab/></TabContainer>}
          {value === 6 && <TabContainer><AnnuallyTab/></TabContainer>}
          {value === 7 && <TabContainer><OnceOffTab/></TabContainer>}
        </div>
      </ManagementLayout>
    );
  }
}

ScrollIconTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollIconTabs);
