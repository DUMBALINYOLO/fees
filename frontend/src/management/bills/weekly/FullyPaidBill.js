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
    getWeeklyFullyPaidBill,
    getBillLines,
    getBillTransferPayments,
    getBillCashPayments,
    getBillMobilePayments,
    getBillDebitCardPayments,
    getUnverifiedBillPayments,
} from '../../../actions/accounts/expenses';
import BillAbout from './About';
import BillLines from './BillLines';
import Payments from './payments/PaymentsTab';






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
      this.props.getWeeklyFullyPaidBill(this.props.match.params.id, this.props.token);
      this.props.getBillLines(this.props.match.params.id, this.props.token);
      this.props.getUnverifiedBillPayments(this.props.match.params.id, this.props.token);
      this.props.getBillDebitCardPayments(this.props.match.params.id, this.props.token);
      this.props.getBillMobilePayments(this.props.match.params.id, this.props.token);
      this.props.getBillCashPayments(this.props.match.params.id, this.props.token);
      this.props.getBillTransferPayments(this.props.match.params.id, this.props.token);
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      classes,
      unverifiedbillpayments,
      billcashpayments,
      billtransferpayments,
      billdebitcardpayments,
      billmobilepayments,
    } = this.props;
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
              <Tab label="PAYMENTS" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><BillAbout bill={this.props.bill}/></TabContainer>}
          {value === 1 && <TabContainer><BillLines lines={this.props.billlines}/></TabContainer>}
          {value === 2 && <TabContainer><Payments mobilepayments ={billmobilepayments} cardpayments={billdebitcardpayments} transferpayments={billtransferpayments}  cashpayments={billcashpayments} unverifiedpayments={unverifiedbillpayments}/></TabContainer>}
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    billlines: state.expenses.billlines,
    bill: state.expenses.weeklyfullypaidbill,
    unverifiedbillpayments : state.expenses.unverifiedbillpayments,
    billcashpayments : state.expenses.billcashpayments,
    billtransferpayments: state.expenses.billtransferpayments,
    billdebitcardpayments: state.expenses.billdebitcardpayments,
    billmobilepayments : state.expenses.billmobilepayments,
    token: state.auth.token,
  });

  const AttendanceMapped = connect(
    mapStateToProps,
    {
      getBillLines,
      getWeeklyFullyPaidBill,
      getBillTransferPayments,
      getBillCashPayments,
      getBillMobilePayments,
      getBillDebitCardPayments,
      getUnverifiedBillPayments
    }
  )(Bill);

  export default withStyles(styles)(AttendanceMapped);
