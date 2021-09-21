import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../../layout/ManagementLayout';
import {
    getMonthlyPendingPaymentBill,
    getBillLines
} from '../../../actions/accounts/expenses';
import BillAbout from './BillAbout';
import BillLines from './BillLines';





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

class Bill extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getMonthlyPendingPaymentBill(this.props.match.params.id, this.props.token);
      this.props.getBillLines(this.props.match.params.id, this.props.token);
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
            >
              <Tab label="DETAILS" />
              <Tab label="LINES" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><BillAbout bill={this.props.bill}/></TabContainer>}
          {value === 1 && <TabContainer><BillLines lines={this.props.billlines}/></TabContainer>}
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    billlines: state.expenses.billlines,
    bill: state.expenses.monthlypendingpaymentbill,
    token: state.auth.token,
  });
  
  const AttendanceMapped = connect(
    mapStateToProps,
    {getBillLines, getMonthlyPendingPaymentBill}
  )(Bill);
  
  export default withStyles(styles)(AttendanceMapped);
