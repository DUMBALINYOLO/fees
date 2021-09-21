import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {
  Paper,
  makeStyles,
}
from '@material-ui/core';

import { getUnpaidInvoices } from '../../../actions/invoicing/invoices';



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

const PendingCustomerOrders = (props) => {

    const classes = useStyles();
    const [selectedProducts, setSelectedProducts] = useState(null);

    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const {token} =props;
    const history = useHistory();



    useEffect(() => {
      if(!props.fetched) {
          props.getUnpaidInvoices(token);
      }
      console.log('mount it!');
    }, []);



    const handleClick = id =>{
      history.push(`/managementdashboard/unpaid-invoices/${id}`)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  className="p-button-warning"
                  onClick={() => handleClick(rowData.id)}
                  label='OPEN'
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
        <Paper className='bg-royal card-box-hover-rise'>
          <div className="datatable-crud-demo">
            <Toast ref={toast} />
            <div className="card">
              <DataTable
                ref={dt}
                value={props.records}
                selection={selectedProducts}
                onSelectionChange={(e) => setSelectedProducts(e.value)}
                dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} ORDERS"
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
                  field="customer"
                  header="CUSTOMER"
                  sortable
                  filter
                />
                <Column
                  field="tax_amount"
                  header="TAX IN $"
                  sortable
                  filter
                />
                <Column
                  field="subtotal"
                  header="SUBTOTAL IN $"
                  sortable
                  filter
                />
                <Column
                  field="total"
                  header="TOTAL IN $"
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
    records: state.invoices.unpaidinvoices,
    token: state.auth.token,
    userRole: state.auth.userRole,
})

export default connect(
  mapStateToProps,
  {getUnpaidInvoices  } )
  (PendingCustomerOrders);
