import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from './layout/ManagementLayout';
import AdjustmentsTab from './adjustments/AdjustmentsTab';
import JournalsTab from './journals/JournalsTab';
import LedgersTab from './ledgers/LedgersTab';
import PostsTab from './posts/PostsTabs';
import WorkBookTab from './workbooks/WorkBooksTab';
import WorkBooksTab from './workbooks/WorkBooksTab';



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
              className= 'card-box-hover-rise'
            >
              <Tab label="JOURNALS" />
              <Tab label="LEDGERS" />
              <Tab label="WORKBOOKS" />
              <Tab label="POSTS" />
              <Tab label="ADJUSTMENTS" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><JournalsTab/></TabContainer>}
          {value === 1 && <TabContainer><LedgersTab/></TabContainer>}
          {value === 2 && <TabContainer><WorkBooksTab/></TabContainer>}
          {value === 3 && <TabContainer><PostsTab/></TabContainer>}
          {value === 4 && <TabContainer><AdjustmentsTab/></TabContainer>}
        </div>
      </ManagementLayout>
    );
  }
}

ScrollIconTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollIconTabs);
