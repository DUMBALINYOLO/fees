import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout'
import {
    getDeactivedSupplier,
    getSupplierAddresses,
    addSupplierAddress,
    editSupplierAddress,
} from '../../actions/inventory/suppliers';
import SupplierDetail from './SupplierDetail';
import Addresses from './Addresses';


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
      this.props.getDeactivedSupplier(this.props.match.params.id, this.props.token);
      this.props.getSupplierAddresses(this.props.match.params.id, this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getDeactivedSupplier(this.props.match.params.id, newProps.token);
        this.props.getSupplierAddresses(this.props.match.params.id, newProps.token);
      }
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, activesupplier } = this.props;
    const { value } = this.state;
    console.log(activesupplier)

    return (
      <ManagementLayout>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="secondary"
            >
              <Tab label="DETAIL" />
              <Tab label="ADDRESS" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><SupplierDetail data={this.props.deactivatedsupplier}/></TabContainer>}
          {value === 1 && <TabContainer><Addresses data={this.props.deactivatedsupplier} editAddress={this.props.editSupplierAddress} addAddress={this.props.addSupplierAddress} getAddresses={this.props.getSupplierAddresses} addresses={this.props.supplieraddresses} token={this.props.token}/></TabContainer>}
         
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    deactivatedsupplier: state.suppliers.deactivatedsupplier,
    supplieraddresses: state.suppliers.supplieraddresses,
    token: state.auth.token,
    loading: state.suppliers.loading,
  });
  
  
  
  const SingleAccountMapped = connect(
    mapStateToProps,
    {
        getDeactivedSupplier,
        getSupplierAddresses,
        addSupplierAddress,
        editSupplierAddress,
    }
  )(ScrollIconTabs);


export default withStyles(styles)(SingleAccountMapped);
