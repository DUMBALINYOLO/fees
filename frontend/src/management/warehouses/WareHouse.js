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
    getWarehouse,
    getStorageMedias,
    getWarehouseItems,
    addStorageMedia,
    editStorageMedia,
    addWarehouseItem
} from '../../actions/inventory/warehouses';
import {getInventoryItems} from '../../actions/inventory/inventory';
import WareHouseDetail from './WareHouseDetail';
import WareHouseItems from './WareHouseItems';
import StorageMedias from './StorageMedias';



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
      this.props.getWarehouse(this.props.match.params.id, this.props.token);
      this.props.getWarehouseItems(this.props.match.params.id, this.props.token);
      this.props.getStorageMedias(this.props.match.params.id, this.props.token);
      this.props.getInventoryItems(this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getWarehouse(this.props.match.params.id, newProps.token);
        this.props.getWarehouseItems(this.props.match.params.id, newProps.token);
        this.props.getStorageMedias(this.props.match.params.id, newProps.token); 
        this.props.getInventoryItems(newProps.token);   
      }
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { 
        classes, 
        warehouse,
        warehouseitems,
        storagemedias,
        getStorageMedias,
        getWarehouseItems,
        token,
        editStorageMedia,
        addStorageMedia,
        addWarehouseItem,
        inventoryitems
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
              <Tab label="STORAGE MEDIAS" />
              <Tab label="STOCK ITEMS" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><WareHouseDetail data={warehouse}/></TabContainer>}
          {value === 1 && <TabContainer><StorageMedias storagemedias={storagemedias} getMedias={getStorageMedias} editMedia={editStorageMedia} addMedia={addStorageMedia} token={token} data={warehouse}/></TabContainer>}
          {value === 2 && <TabContainer><WareHouseItems data={warehouse} inventoryitems={inventoryitems} getItems={getWarehouseItems} addItem={addWarehouseItem} token={token} storagemedias={storagemedias} items={warehouseitems}/></TabContainer>}
         
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    warehouse: state.warehouses.warehouse,
    storagemedias: state.warehouses.storagemedias,
    warehouseitems: state.warehouses.warehouseitems,
    inventoryitems: state.inventory.inventoryitems,
    token: state.auth.token,
    loading: state.suppliers.loading,
  });
  
  
  
  const SingleAccountMapped = connect(
    mapStateToProps,
    {
        getWarehouse,
        getStorageMedias,
        getWarehouseItems,
        addStorageMedia,
        editStorageMedia,
        addWarehouseItem,
        getInventoryItems,
    }
  )(ScrollIconTabs);


export default withStyles(styles)(SingleAccountMapped);

