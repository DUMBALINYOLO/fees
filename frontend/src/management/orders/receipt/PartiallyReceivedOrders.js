import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import {
  Paper,
  makeStyles,
}
from '@material-ui/core';
import { 
    getPartiallyReceivedPaidOrders
} from '../../../actions/inventory/orders';



const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))



const LockedSeries = (props) => {

    

    const classes = useStyles();
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const history = useHistory();
    const toast = useRef(null);
    const dt = useRef(null);
    const {token} =props;


    useEffect(() => {
      if(!props.fetched) {
          props.getPartiallyReceivedPaidOrders(token);
      }
      console.log('mount it!');
    }, []);


    

    

    const handleClick = id =>{
      history.push(`/managementdashboard/inventory/partiallyreceived-orders/${id}`)
    }


    

    
  

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button
                  label="ADD NEW"
                  className="p-button-info p-mr-2"
                />
            </React.Fragment>
        )
    }

   

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  style={{paddingBottom: '5px'}}
                  className="p-button-warning p-mr-2 p-mb-2"
                  label='VERIFY'
                  
                />
                <Button
                  className="p-button-success p-mr-2 p-mb-2"
                  label='OPEN'
                  onClick ={()=> handleClick(rowData.id)}
                />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    
    

    return (
      <>
        <Paper className={classes.pageContent}>
            <div className="datatable-crud-demo">
                <Toast ref={toast} />

                <div className="card">
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>

                    <DataTable
                        ref={dt}
                        value={props.records}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} BILLS"
                        globalFilter={globalFilter}
                        header={header}
                        virtualScroll
                        virtualRowHeight={5}
                        className="p-datatable-gridlines"
                      >


                        <Column
                          field="id"
                          header="ID"
                          sortable
                          filter

                        />
                        <Column
                          field="date"
                          header="DATE"
                          sortable
                          filter
                        />
                        <Column
                          field="due"
                          header="DUE"
                          sortable
                          filter
                        />
                        <Column
                          field="expected_receipt_date"
                          header="EXPECTED DATE"
                          sortable
                          filter
                        />
                        <Column
                          field="supplier"
                          header="SUPPLIER"
                          sortable
                          filter

                        />
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>

                

                
            </div>
          </Paper>
        </>

    );
}

const mapStateToProps = state =>({
    records: state.orders.partiallyreceivedorders,
    token: state.auth.token,
})


export default connect(
  mapStateToProps,
  {getPartiallyReceivedPaidOrders },
  )
  (LockedSeries);
