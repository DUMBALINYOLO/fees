import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {connect} from 'react-redux';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {
  Paper,
  makeStyles,
}

from '@material-ui/core';
import {verifyBillPayment} from '../../../../actions/accounts/expenses'



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



const Lines = (props) => {

    const classes = useStyles();
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);




    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  className="p-button-success p-mr-2 p-mb-2"
                  label='VERIFY'
                  onClick={()=> props.verifyBillPayment(rowData.id, rowData, props.token)}
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
                    <DataTable
                        ref={dt}
                        value={props.payments}
                        dataKey="id" paginator rows={25} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} PLANS"
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
                          field="amount"
                          header="AMOUNT"
                          sortable
                          filter

                        />
                        <Column
                          field="paid_by"
                          header="PAID BY"
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
    token: state.auth.token,
})


export default connect(
  mapStateToProps,
  {verifyBillPayment },
  )
  (Lines);