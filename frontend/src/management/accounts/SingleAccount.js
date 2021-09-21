import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout'
import SingleAccountDetail from './SingleAccountDetail';
import Credits from './Credits';
import Debits from './Debits';
import {getAccount} from '../../actions/accounts/accounts';

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

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getAccount(this.props.match.params.id, this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getAccount(this.props.match.params.id, newProps.token);
      }
    }
  }

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
              <Tab label="ABOUT" />
              <Tab label="DEBITS" />
              <Tab label="CREDITS" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><SingleAccountDetail data={this.props.account}/></TabContainer>}
          {value === 1 && <TabContainer><Debits data={this.props.account}/></TabContainer>}
          {value === 2 && <TabContainer><Credits data={this.props.account}/></TabContainer>}
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    account: state.accounts.account,
    token: state.auth.token,
    loading: state.accounts.loading,
  });



  const SingleAccountMapped = connect(
    mapStateToProps,
    {getAccount}
  )(ScrollIconTabs);


export default withStyles(styles)(SingleAccountMapped);
