import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import {
  Paper,
  makeStyles,
}
from '@material-ui/core';
import { getOnceOffUnverifiedBills, verifyOnceOffBill } from '../../../actions/accounts/expenses';
import CreateBill from './CreateBill';


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
    const [productDialog, setProductDialog] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const history = useHistory();
    const toast = useRef(null);
    const dt = useRef(null);
    const {token} =props;


    useEffect(() => {
      if(!props.fetched) {
          props.getOnceOffUnverifiedBills(token);
      }
      console.log('mount it!');
    }, []);


    

    const openNew = () => {
        setProductDialog(true);
    }

    const handleClick = id =>{
      history.push(`/managementdashboard/publications/locked-series/${id}`)
    }


    const changeBill = (id, data, token) => {
      props.verifyOnceOffBill(id, data, token);
      props.getOnceOffUnverifiedBills(token);     
    }



    const hideDialog = () => {
        setProductDialog(false);
    }

    
  

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button
                  label="ADD NEW"
                  className="p-button-info p-mr-2"
                  onClick={openNew}
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
                  onClick={() => changeBill(rowData.id, rowData, token)}
                />
                <Button
                  className="p-button-success p-mr-2 p-mb-2"
                  label='OPEN'
                  onClick={() => handleClick(rowData.id)}

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
                          field="category"
                          header="CATEGORY"
                          sortable
                          filter
                        />
                        <Column
                          field="vendor"
                          header="VENDOR"
                          sortable
                          filter

                        />
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>

                <Dialog
                  visible={productDialog}
                  style={{ width: '900px' }}
                  header="BILL FORM"
                  modal
                  className="p-fluid"
                  onHide={hideDialog}
                >
                  <CreateBill
                    productDialog ={setProductDialog}
                  />
                </Dialog>

                
            </div>
          </Paper>
        </>

    );
}

const mapStateToProps = state =>({
    records: state.expenses.onceoffunverifiedbills,
    token: state.auth.token,
})


export default connect(
  mapStateToProps,
  {getOnceOffUnverifiedBills, verifyOnceOffBill},
  )
  (LockedSeries);
