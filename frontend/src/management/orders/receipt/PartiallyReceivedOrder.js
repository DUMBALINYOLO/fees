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
    getPartiallyReceivedOrder,
    getStockReceipts,
    getOrderItems,
} from '../../../actions/inventory/orders';
import StockReceipts from './StockReceipts';
import OrderItems from './OrderItems';
import OrderDetail from './PartiallyDetail';



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
      this.props.getPartiallyReceivedOrder(this.props.match.params.id, this.props.token);
      this.props.getOrderItems(this.props.match.params.id, this.props.token);
      this.props.getStockReceipts(this.props.match.params.id, this.props.token);   
      
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getPartiallyReceivedOrder(this.props.match.params.id, newProps.token);
        this.props.getOrderItems(this.props.match.params.id, newProps.token);
        this.props.getStockReceipts(this.props.match.params.id, newProps.token);
      }
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { 
        classes,
        stockreceipts,
        unreceivedorder,
        orderitems,
        getStockReceipts,
        token,
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
              <Tab label="STOCK RECEIPTS" />
              <Tab label="ITEMS" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><OrderDetail orderitems={orderitems} data={unreceivedorder}/></TabContainer>}
          {value === 1 && <TabContainer><StockReceipts token={token} getStockReceipts={getStockReceipts} stockreceipts={stockreceipts} data={unreceivedorder} /></TabContainer>}
          {value === 2 && <TabContainer><OrderItems orderitems={orderitems} data={unreceivedorder}/></TabContainer>}
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    unreceivedorder: state.orders.partiallyreceivedorder,
    stockreceipts: state.orders.stockreceipts,
    orderitems: state.orders.orderitems,
    token: state.auth.token,
    loading: state.orders.loading,
  });
  
  
  
  const SingleAccountMapped = connect(
    mapStateToProps,
    {
        getPartiallyReceivedOrder,
        getStockReceipts,
        getOrderItems,
    }
  )(ScrollIconTabs);


export default withStyles(styles)(SingleAccountMapped);
