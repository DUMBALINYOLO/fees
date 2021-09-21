import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../../layout/ManagementLayout'
import {
    getUnpaidOrder,
    getUnverifiedOrderPayments,
    getCashOrderPayments,
    getDebitCardOrderPayments,
    getTransferOrderPayments,
    getMobileOrderPayments
    
} from '../../../actions/inventory/orders';
import OrderDetail from './UnpaidDetail';
import PaymentsTab from './PaymentsTab';



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
      this.props.getUnpaidOrder(this.props.match.params.id, this.props.token);
      this.props.getUnverifiedOrderPayments(this.props.match.params.id, this.props.token);
      this.props.getCashOrderPayments(this.props.match.params.id, this.props.token);  
      this.props.getDebitCardOrderPayments(this.props.match.params.id, this.props.token); 
      this.props.getTransferOrderPayments(this.props.match.params.id, this.props.token); 
      this.props.getMobileOrderPayments(this.props.match.params.id, this.props.token); 


      
      
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getUnpaidOrder(this.props.match.params.id, newProps.token);
        this.props.getUnverifiedOrderPayments(this.props.match.params.id, newProps.token);
        this.props.getCashOrderPayments(this.props.match.params.id, newProps.token);
        this.props.getDebitCardOrderPayments(this.props.match.params.id, newProps.token);
        this.props.getTransferOrderPayments(this.props.match.params.id, newProps.token);
        this.props.getMobileOrderPayments(this.props.match.params.id, newProps.token);
      }
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { 
        unpaidorder,
        unverifiedorderpayments,
        cashorderpayments,
        debitcardorderpayments,
        transferorderpayments,
        mobileorderpayments,
        token,
        classes
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
              <Tab label="PAYMENTS" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><OrderDetail  data={unpaidorder} token={token}/></TabContainer>}
          {value === 1 && <TabContainer><PaymentsTab mobileorderpayments={mobileorderpayments} transferorderpayments={transferorderpayments} debitcardorderpayments={debitcardorderpayments} cashorderpayments={cashorderpayments} unverifiedorderpayments={unverifiedorderpayments} data={unpaidorder} token={token}/></TabContainer>}
          
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    unpaidorder: state.orders.unpaidorder,
    unverifiedorderpayments: state.orders.unverifiedorderpayments,
    cashorderpayments: state.orders.cashorderpayments,
    debitcardorderpayments: state.orders.debitcardorderpayments,
    transferorderpayments: state.orders.transferorderpayments,
    mobileorderpayments: state.orders.mobileorderpayments,
    token: state.auth.token,
    loading: state.orders.loading,
  });
  
  
  
  const SingleAccountMapped = connect(
    mapStateToProps,
    {
        getUnpaidOrder,
        getUnverifiedOrderPayments,
        getCashOrderPayments,
        getDebitCardOrderPayments,
        getTransferOrderPayments,
        getMobileOrderPayments
    }
  )(ScrollIconTabs);


export default withStyles(styles)(SingleAccountMapped);
